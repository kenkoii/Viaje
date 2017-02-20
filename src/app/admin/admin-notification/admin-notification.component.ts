import { Component, OnInit } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'app-admin-notification',
  templateUrl: './admin-notification.component.html',
  styleUrls: ['./admin-notification.component.scss']
})
export class AdminNotificationComponent implements OnInit {
  safezones: FirebaseListObservable<any>;
  emergencies: FirebaseListObservable<any>;
  announcements: FirebaseListObservable<any>;
  constructor(af: AngularFire) {
      this.safezones = af.database.list('/users', {
        query: {
          orderByChild: 'type',
          equalTo: 'safezone',
          limitToLast: 10
        }
      });

      this.emergencies = af.database.list('/emergencies');

      this.announcements = af.database.list('/announcements');
      // TODO Add form for announcements
      // TODO Add map modal for emergencies


  }

  ngOnInit() {
  }

  submitAnnouncement(text: string){
    let announcement = {
      message: text,
      timestamp: Date.now()
    }
    this.announcements.push(announcement);
  }

}
