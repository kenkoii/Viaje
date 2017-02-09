import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';
import { UserService } from '../user.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  private role: string;
  private formText: string;
  private safezones: any;
  private loader: Boolean = true;
  posts: FirebaseListObservable<any>;
  constructor(private af: AngularFire, private userService: UserService) {
    this.role = localStorage.getItem('role');
    this.posts = this.af.database.list('/posts').map((arr)=>{return arr.reverse();}) as FirebaseListObservable<any[]>;
    this.safezones = af.database.list('/users', {
      query: {
        orderByChild: 'type',
        equalTo: 'safezone'
      }
    });
  }
  ngOnInit() {
    this.loader = false;
  }

  submitAdvertisement(adText: string){
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

  submitPost(){
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

  submitComment(post: any, text: string){
    let user = JSON.parse(localStorage.getItem('user'));
    delete user.$key;
    console.log(user);
    console.log(post);
    let comment = {
         timestamp: Date.now(),
         user: user,
         text: text
    };
    //Push post to firebase.
    let postComment = this.af.database.list('/posts/'+post.$key+'/comments');
    postComment.push(comment);
    this.formText = "";
  }

  convertArray(val){
    console.log(Array.from(val));
    return Array.from(val);
  }

}
