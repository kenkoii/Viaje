import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit, OnChanges {
  @Input() post: any;
  @Input() emergency: any;
  comments: any;
  constructor(private af: AngularFire) {
  }

  ngOnChanges() {
    if (this.post) {
        this.af.database.list('/posts/' + this.post + '/comments').subscribe(data => {
          this.comments = data;
        });
    }
    console.log(this.emergency);
    if (this.emergency) {
      this.af.database.list('/emergencies/' + this.emergency + '/comments').subscribe(data => {
        this.comments = data;
        console.log(this.comments);
      });
    }
  }

  ngOnInit() {
  }

  convertArray(val) {
    console.log(Array.from(val));
    return Array.from(val);
  }
}
