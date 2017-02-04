import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  private email_address: string;
  private password: string;
  private loading: boolean = false;
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onLogin(){
    this.loading = !this.loading;
    this.userService.userLogin(this.email_address, this.password);
  }


}
