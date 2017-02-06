import { Component, OnInit } from '@angular/core';
import { MapsAPILoader } from 'angular2-google-maps/core';
import { GoogleMapsAPIWrapper } from 'angular2-google-maps/core';
declare var google: any;
var gradient = [
          'rgba(0, 255, 255, 0)',
          'rgba(0, 255, 255, 1)',
          'rgba(0, 191, 255, 1)',
          'rgba(0, 127, 255, 1)',
          'rgba(0, 63, 255, 1)',
          'rgba(0, 0, 255, 1)',
          'rgba(0, 0, 223, 1)',
          'rgba(0, 0, 191, 1)',
          'rgba(0, 0, 159, 1)',
          'rgba(0, 0, 127, 1)',
          'rgba(63, 0, 91, 1)',
          'rgba(127, 0, 63, 1)',
          'rgba(191, 0, 31, 1)',
          'rgba(255, 0, 0, 1)'
        ]
//TODO add heat map layer for online motorists
@Component({
  selector: 'app-heat-map',
  templateUrl: './heat-map.component.html',
  styleUrls: ['./heat-map.component.scss']
})
export class HeatMapComponent implements OnInit {
  public heatmap: any;
  constructor(mapsAPILoader: MapsAPILoader, private _wrapper: GoogleMapsAPIWrapper) {
    this._wrapper.getNativeMap()
            .then((m) => {
              console.log(m);
              this.heatmap = new google.maps.visualization.HeatmapLayer({
                        data: [
                          new google.maps.LatLng(10.3082659, -123.8941109),
                          new google.maps.LatLng(10.3082659, -123.8941109),
                          new google.maps.LatLng(10.3082659, -123.8941109),
                          new google.maps.LatLng(10.3082659, -123.8941109),
                          new google.maps.LatLng(10.3082659, -123.8941109),
                          new google.maps.LatLng(10.3082659, -123.8941109),
                          new google.maps.LatLng(10.3082659, -123.8941109),
                          new google.maps.LatLng(10.3082659, -123.8941109),
                          new google.maps.LatLng(10.3082659, -123.8941109),
                          new google.maps.LatLng(10.3082659, -123.8941109),
                          new google.maps.LatLng(10.3082659, -123.8941109),
                          new google.maps.LatLng(10.3082659, -123.8941109),
                          new google.maps.LatLng(10.3082659, -123.8941109),
                          new google.maps.LatLng(10.3082659, -123.8941109),
                          new google.maps.LatLng(10.3082659, -123.8941109),
                          new google.maps.LatLng(10.3082659, -123.8941109),
                          new google.maps.LatLng(10.3082659, -123.8941109),
                          new google.maps.LatLng(10.3082659, -123.8941109),
                          new google.maps.LatLng(10.3082659, -123.8941109),
                          new google.maps.LatLng(10.3082659, -123.8941109),
                          new google.maps.LatLng(10.3082659, -123.8941109),
                          new google.maps.LatLng(10.3082659, -123.8941109),
                          new google.maps.LatLng(10.3082659, -123.8941109),
                          new google.maps.LatLng(10.3082659, -123.8941109),
                          new google.maps.LatLng(10.3082659, -123.8941109),
                          new google.maps.LatLng(10.3082659, -123.8941109),
                          new google.maps.LatLng(10.3082659, -123.8941109),
                          new google.maps.LatLng(10.3082659, -123.8941109),
                          new google.maps.LatLng(10.3082659, -123.8941109),
                          new google.maps.LatLng(10.3082659, -123.8941109),
                          new google.maps.LatLng(10.3082659, -123.8941109),
                          new google.maps.LatLng(10.3082659, -123.8941109),
                          new google.maps.LatLng(10.3082659, -123.8941109),
                          new google.maps.LatLng(10.3082659, -123.8941109),
                          new google.maps.LatLng(10.3082659, -123.8941109),
                          new google.maps.LatLng(10.3082659, -123.8941109),
                          new google.maps.LatLng(10.3082659, -123.8941109),
                          new google.maps.LatLng(10.3082659, -123.8941109),
                          new google.maps.LatLng(10.3082659, -123.8941109),
                          new google.maps.LatLng(10.3082659, -123.8941109),
                          new google.maps.LatLng(10.3082659, -123.8941109),
                          new google.maps.LatLng(10.3082659, -123.8941109),
                          new google.maps.LatLng(10.3082659, -123.8941109),
                          new google.maps.LatLng(10.3082659, -123.8941109),
                          new google.maps.LatLng(10.3082659, -123.8941109),
                          new google.maps.LatLng(10.3082659, -123.8941109),
                          new google.maps.LatLng(10.3082659, -123.8941109),
                          new google.maps.LatLng(10.3082659, -123.8941109),
                          new google.maps.LatLng(10.3082659, -123.8941109),
                          new google.maps.LatLng(10.3082659, -123.8941109),
                          new google.maps.LatLng(10.3082659, -123.8941109),
                          new google.maps.LatLng(10.3082659, -123.8941109),
                          new google.maps.LatLng(10.3082659, -123.8941109)],
                        map: m
                      });
              console.log(this.heatmap);
            });
    }

  ngOnInit() {
  }

}
