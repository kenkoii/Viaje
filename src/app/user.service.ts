import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import {Router} from '@angular/router';

@Injectable()
export class UserService {
  public UserAuthState: any;
  constructor(private http: Http, public af: AngularFire,  private router: Router) {
    this.af.auth.subscribe(
              auth => {
                this.UserAuthState = auth;
                if(auth!=null){
                  this.router.navigateByUrl('admin');
                }
                console.log(auth);
              },
              err => console.log(err));
  }

  userLogin(email: string, password: string) {
    this.af.auth.login({
            email: email,
            password: password,
          },{
          provider: AuthProviders.Password,
          method: AuthMethods.Password,
        });
  }

}
