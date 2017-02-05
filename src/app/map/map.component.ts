import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { SebmGoogleMap } from 'angular2-google-maps/core';

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
  private safezoneVisibility: boolean = true;
  private postsVisibility: boolean = true;
  constructor() { }

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

  mapClicked($event: MouseEvent) {
    console.log("Hello");
    if(!this.onlineusers && !this.markers){
      this.mapClick.emit({lat: $event.coords.lat, lng: $event.coords.lng})
    }else{
        console.log("Not logged in");
    }
  }

  getIcon(type){
    return "assets/icons/"+type+".png";
  }

}
