import { Component, OnInit } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.sass']
})
export class AdminHomeComponent implements OnInit {
  motorists: FirebaseListObservable<any>;
    constructor(af: AngularFire) {
      this.motorists = af.database.list('/users/motorist');
  }

  ngOnInit() {
  }

}
