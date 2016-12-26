import { Component, OnInit } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'app-admin-motorist',
  templateUrl: './admin-motorist.component.html',
  styleUrls: ['./admin-motorist.component.scss']
})
export class AdminMotoristComponent implements OnInit {
  motorists: FirebaseListObservable<any>;
  constructor(af: AngularFire) {
    this.motorists = af.database.list('/users', {
      query: {
        orderByChild: 'type',
        equalTo: 'motorist'
      }
    });
  }
  ngOnInit() {
  }

}
