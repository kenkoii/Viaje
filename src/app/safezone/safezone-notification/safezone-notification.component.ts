import { Component, OnInit } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-safezone-notification',
  templateUrl: './safezone-notification.component.html',
  styleUrls: ['./safezone-notification.component.scss']
})
export class SafezoneNotificationComponent implements OnInit {
  emergencies: any;
  closedEmergencies: any;
  isLocationModalOpen: boolean = false;
  selectedEmergency: any;
  constructor(af: AngularFire, userService: UserService) {
    console.log(userService.getServiceType());
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
  }

  ngOnInit() {
  }

  openLocationModal(emergency: any) {
    console.log(emergency)
    this.isLocationModalOpen = !this.isLocationModalOpen;
    this.selectedEmergency = emergency;
    setTimeout(function(){
      window.dispatchEvent(new Event('resize'));
    }, 0.5);
  }

  respondEmergency(emergency: any) {
    this.emergencies.update(emergency.$key, {status: 'closed'});
  }

}
