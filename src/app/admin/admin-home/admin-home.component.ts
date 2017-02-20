import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {
  onlineusers: FirebaseListObservable<any>;
  posts: FirebaseListObservable<any>;
  safezones: any;
  constructor(af: AngularFire) {
    this.onlineusers = af.database.list('/online_users');
    this.posts = af.database.list('/posts').map((arr) => {return arr.reverse(); }) as FirebaseListObservable<any[]>;
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
