import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { FirebaseAuth, FirebaseAuthState, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';

@Injectable()
export class UserService {
  public UserAuthState: FirebaseAuthState;
  public user: any;
  constructor(private http: Http, public af: AngularFire,  private router: Router) {
    this.af.auth.subscribe(
              auth => {
                this.UserAuthState = auth;
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
        }).then((data)=>{
            this.af.database.list('/users/', {
              query: {
                orderByChild: 'email_address',
                equalTo: data.auth.email
              }
            }).subscribe( res => {
              this.user = res[0];
              localStorage.setItem('role',this.user.type)
              console.log(this.user);
              if(this.user.type == 'admin'){
                this.router.navigateByUrl('admin');
              }else{
                this.router.navigateByUrl('');
              }
            });
        }).catch((err)=>{
          console.log(err);
        });
  }

  userLogout(){
    this.af.auth.logout();
    localStorage.removeItem('role');
  }

  isLoggedIn(){
    return this.UserAuthState?true:false;
  }

  getRole(){
    return localStorage.getItem('role') || ''
  }
}
