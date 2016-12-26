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
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onLogin(){
    this.userService.userLogin(this.email_address, this.password);
  }

  onLogout(){
    this.userService.userLogout();
  }

}
