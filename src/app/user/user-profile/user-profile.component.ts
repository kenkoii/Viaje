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
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.user = this.userService.getUser();
    console.log('hello user is: ' + this.user);
  }

  onLogout(){
    this.userService.userLogout();
    this.router.navigate(['login']);
  }
}
