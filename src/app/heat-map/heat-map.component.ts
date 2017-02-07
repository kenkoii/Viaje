import { Component, OnInit } from '@angular/core';
import { MapsAPILoader } from 'angular2-google-maps/core';
import { GoogleMapsAPIWrapper } from 'angular2-google-maps/core';
declare var google: any;
// TODO add heat map layer for online motorists
@Component({
  selector: 'app-heat-map',
  templateUrl: './heat-map.component.html',
  styleUrls: ['./heat-map.component.scss']
})
export class HeatMapComponent implements OnInit {
  public heatmap: any;
  constructor(mapsAPILoader: MapsAPILoader, private _wrapper: GoogleMapsAPIWrapper) {
    mapsAPILoader.load()
            .then(()=>{
              _wrapper.getNativeMap()
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
                        console.log(this.heatmap.getData());
                        this.heatmap.setMap(m);
                      });
            });
    }

  ngOnInit() {
  }

}
