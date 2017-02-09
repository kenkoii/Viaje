import { Component, OnInit, Inject } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseApp } from 'angularfire2';
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
  private storageRef: any;
  private advertisements: FirebaseListObservable<any>;
  private loader: Boolean = true;
  private file: File;
  posts: FirebaseListObservable<any>;
  constructor(private af: AngularFire, private userService: UserService, @Inject(FirebaseApp) firebaseApp: any) {
    this.storageRef = firebaseApp.storage().ref();
    this.role = localStorage.getItem('role');
    this.advertisements = this.af.database.list('/advertisements').map((arr) => {return arr.reverse(); }) as FirebaseListObservable<any[]>;;
    this.posts = this.af.database.list('/posts').map((arr) => {return arr.reverse(); }) as FirebaseListObservable<any[]>;
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

  fileChangeEvent(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
        this.file = fileList[0];
    }
  }

  submitAdvertisement(adText: HTMLInputElement, adTitle: HTMLInputElement) {
    let user = JSON.parse(localStorage.getItem('user'));
    delete user.$key;
    let advertisement = {
         timestamp: Date.now(),
         user: user,
         text: adText.value,
         title: adTitle.value,
         img: ''
    };
    // Push post to firebase.
    this.advertisements.push(advertisement);
    this.advertisements.subscribe(res => {
                                    console.log(res);
                                    this.storageRef.child(res[0].$key).put(this.file)
                                                        .then(snapshot => {
                                                              console.log(snapshot);
                                                              this.advertisements.update(res[0].$key, { img : snapshot.downloadURL});
                                                            });
                                });

    adText.value = '';
    adTitle.value = '';
  }

  submitPost() {
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
    // Push post to firebase.
    this.posts.push(post);
    this.formText = '';
  }

  submitComment(post: any, text: string) {
    let user = JSON.parse(localStorage.getItem('user'));
    delete user.$key;
    console.log(user);
    console.log(post);
    let comment = {
         timestamp: Date.now(),
         user: user,
         text: text
    };
    // Push post to firebase.
    let postComment = this.af.database.list('/posts/' + post.$key + '/comments');
    postComment.push(comment);
    this.formText = '';
  }

  convertArray(val) {
    console.log(Array.from(val));
    return Array.from(val);
  }

}
