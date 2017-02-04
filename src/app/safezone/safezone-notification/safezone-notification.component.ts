import { Component, OnInit } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-safezone-notification',
  templateUrl: './safezone-notification.component.html',
  styleUrls: ['./safezone-notification.component.scss']
})
export class SafezoneNotificationComponent implements OnInit {
  emergencies: FirebaseListObservable<any>;
  constructor(af: AngularFire, userService: UserService) {
    console.log(userService.getServiceType());
      this.emergencies = af.database.list('/emergencies', {
        query: {
          orderByChild: 'safezoneType',
          equalTo: userService.getServiceType(),
          limitToLast: 10
        }
      });
  }

  ngOnInit() {
  }

}
