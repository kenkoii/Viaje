import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  private role: string;
  private formText: string;
  posts: FirebaseListObservable<any>;
  constructor(private af: AngularFire) {
    this.role = localStorage.getItem('role');
    this.posts = this.af.database.list('/posts');
  }
  ngOnInit() {
  }

  submitPost(){
    // if (navigator.geolocation) {
    //
    //   console.log("Nilusot");
    //     navigator.geolocation.getCurrentPosition(position => {
    //       let post = {
    //            lat: 1,
    //            lng: 1,
    //            timestamp: Date.now(),
    //            user: JSON.parse(localStorage.getItem('user')),
    //            text: this.formText
    //       };
    //       //Push post to firebase.
    //       this.posts.push(post);
    //       console.log("Nilusot diri");
    //     });
    // } else {
    //     console.log("wa kapasar");
    // }
    let user = JSON.parse(localStorage.getItem('user'));
    delete user.$key;
    console.log(user);
    let post = {
         lat: 1,
         lng: 1,
         timestamp: Date.now(),
         user: user,
         text: this.formText
    };
    //Push post to firebase.
    this.posts.push(post);
    this.formText = "";
  }

}
