import { Component, OnInit } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'app-admin-notification',
  templateUrl: './admin-notification.component.html',
  styleUrls: ['./admin-notification.component.scss']
})
export class AdminNotificationComponent implements OnInit {
  safezones: FirebaseListObservable<any>;
    constructor(af: AngularFire) {
      this.safezones = af.database.list('/users/safezones', {
        query: {
          limitToLast: 10,
          orderByKey: true
        }
      });
  }
  ngOnInit() {
  }

}
