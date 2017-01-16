import { Component, OnInit, Input, OnChanges } from '@angular/core';
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
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log(this.onlineusers);
    // this.markers.subscribe(
    //   res => {
    //     this.safezones = res;
    //   },
    //   err => {
    //     console.log(err);
    //   },
    //   () => {
    //     this.safezones[0]
    //   });

  }

  getIcon(type){
    return "assets/icons/"+type+".png";
  }

}
