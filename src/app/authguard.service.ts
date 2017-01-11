import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import {Router} from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {}
  canActivate() {
      if (localStorage.getItem('user')) {
          return true;
      }else {
          this.router.navigateByUrl('/login');
          return false;
      }
  }
}
