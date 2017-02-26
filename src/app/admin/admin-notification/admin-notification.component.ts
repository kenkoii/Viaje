import { Component, OnInit } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'app-admin-notification',
  templateUrl: './admin-notification.component.html',
  styleUrls: ['./admin-notification.component.scss']
})
export class AdminNotificationComponent implements OnInit {
  safezones: FirebaseListObservable<any>;
  closedEmergencies: any;
  emergencies: any;
  announcements: any;
  aText: string;
  constructor(af: AngularFire) {
      this.safezones = af.database.list('/users', {
        query: {
          orderByChild: 'type',
          equalTo: 'safezone',
          limitToLast: 10
        }
      });

      this.emergencies = af.database.list('/emergencies', {
        query: {
          orderByChild: 'status',
          equalTo: 'pending'
        }
      }).map( (arr) => { return arr.reverse(); } );

      this.closedEmergencies = af.database.list('/emergencies', {
        query: {
          orderByChild: 'status',
          equalTo: 'closed'
        }
      }).map( (arr) => { return arr.reverse(); } );

      this.announcements = af.database.list('/announcements').map( (arr) => { return arr.reverse(); } );
      // TODO Add map modal for emergencies
  }

  ngOnInit() {
  }

  submitAnnouncement() {
    let announcement = {
      message: this.aText,
      timestamp: Date.now()
    };
    this.announcements.push(announcement);
    this.aText = '';
  }

  removeAnnouncement(announcement: any) {
    this.announcements.remove(announcement.$key);
  }

  removeEmergency(emergency: any) {
    this.emergencies.remove(emergency.$key);
  }

  respondEmergency(emergency: any) {
    this.emergencies.update(emergency.$key, {status: 'closed'});
  }

}
