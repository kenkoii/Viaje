import { Component, OnInit } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'app-admin-safezone',
  templateUrl: './admin-safezone.component.html',
  styleUrls: ['./admin-safezone.component.scss']
})
export class AdminSafezoneComponent implements OnInit {
  safezones: FirebaseListObservable<any>;
    constructor(af: AngularFire) {
      this.safezones = af.database.list('/users', {
        query: {
          orderByChild: 'type',
          equalTo: 'safezone'
        }
      });
  }
  ngOnInit() {
  }

}
