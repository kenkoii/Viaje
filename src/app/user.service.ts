import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { FirebaseAuthState, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';

declare var swal: any;
@Injectable()
export class UserService {
  public UserAuthState: FirebaseAuthState;
  public user: any = JSON.parse(localStorage.getItem('user')) || {};
  public safezone_type: string;
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
            console.log(data);
            this.af.database.list('/users/', {
              query: {
                orderByChild: 'email_address',
                equalTo: data.auth.email
              }
            }).subscribe( res => {
              this.user = res[0];
              localStorage.setItem('role',this.user.type)
              console.log(this.user);
              if(this.user.service_information_type){
                  this.safezone_type = this.user.service_information_type;
              }
              localStorage.setItem('user',JSON.stringify(this.user));
              if(this.user.type == 'admin'){
                this.router.navigateByUrl('admin');
              }else{
                this.router.navigateByUrl('');
              }
            });
        }).catch((err)=>{
          swal({
            title: "Login Error",
            text: err.message,
            type: "error",
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "OK",
            closeOnConfirm: true
          });
        });
  }

  userLogout(){
    this.af.auth.logout();
    localStorage.removeItem('role');
    localStorage.removeItem('user');
  }

  isLoggedIn(){
    return this.UserAuthState?true:false;
  }

  getRole(){
    return localStorage.getItem('role') || ''
  }

  getUser(){
    return this.user;
  }
  getServiceType(){
    return this.safezone_type;
  }
}
