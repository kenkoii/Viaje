import { NgForm } from '@angular/forms/src/directives';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  private user: any;
  private editProfile: boolean = false;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.user = this.userService.getUser();
    console.log('hello user is: ' + this.user);
  }

  edit() {
    this.editProfile = !this.editProfile;
  }

  editUser(form: any) {
    console.log(form);
    console.log(form['email_address']);
    localStorage.setItem('user', JSON.stringify(this.user));
    this.edit();
  }

  onLogout() {
    this.userService.userLogout();
    this.router.navigate(['login']);
  }
}
