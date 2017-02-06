import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { SebmGoogleMap } from 'angular2-google-maps/core';
import { MapsAPILoader } from 'angular2-google-maps/core';
import { GoogleMapsAPIWrapper } from 'angular2-google-maps/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

declare var google: any;
class Marker{
  service_information_type: string;
  shop_name: string;
  lat: Number;
  lng: Number;
  constructor(){
    this.service_information_type = '';
    this.shop_name = '';
    this.lat = 0;
    this.lng = 0;
  }
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnChanges {
  @Input() markers: any;
  @Input() onlineusers: any;
  @Input() posts: any;
  @Output() mapClick = new EventEmitter();
  private heatmap: any;
  private formText: any;
  private safezoneVisibility: boolean = true;
  private postsVisibility: boolean = true;
  private _map: any;
  constructor(mapsAPILoader: MapsAPILoader, private af: AngularFire) {

  }

  ngOnInit() {

  }

  ngOnChanges() {
    console.log(this.onlineusers);

  }

  toggleSafezones(){
    this.safezoneVisibility = !this.safezoneVisibility;
  }

  togglePosts(){
    this.postsVisibility = !this.postsVisibility;
  }

  submitComment(post: any, text: string){
    let user = JSON.parse(localStorage.getItem('user'));
    delete user.$key;
    console.log(user);
    console.log(post);
    let comment = {
         timestamp: Date.now(),
         user: user,
         text: text
    };
    //Push post to firebase.
    let postComment = this.af.database.list('/posts/'+post.$key+'/comments');
    postComment.push(comment);
    this.formText = "";
  }

  mapClicked($event: MouseEvent) {
    console.log("Hello");
    if(!this.onlineusers && !this.markers){
      this.mapClick.emit({lat: $event.coords.lat, lng: $event.coords.lng})
    }else{
        console.log("Not logged in");
    }
  }

  getIcon(type){
    return "assets/icons/"+type+".svg";
  }

}
