import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {
  onlineusers: FirebaseListObservable<any>;
  constructor(af: AngularFire) {
    this.onlineusers = af.database.list('/online_users');
    console.log(this.onlineusers)
  }

  ngOnInit() {
  }

}
