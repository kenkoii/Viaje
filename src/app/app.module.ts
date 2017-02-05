import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ROUTING }  from './app.routes';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { AuthGuard } from './authguard.service';
import { AdminGuard } from './adminguard.service';
import { UserService } from './user.service';

import { AppComponent } from './app.component';
import { UserSignupComponent } from './user/user-signup/user-signup.component';
import { UserLoginComponent } from './user/user-login/user-login.component';

import { MotoristFormComponent } from './user/user-signup/motorist-form/motorist-form.component';
import { SafezoneFormComponent } from './user/user-signup/safezone-form/safezone-form.component';

import { NavbarComponent } from './navbar/navbar.component';
import { MapComponent } from './map/map.component';

import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminMotoristComponent } from './admin/admin-motorist/admin-motorist.component';
import { AdminSafezoneComponent } from './admin/admin-safezone/admin-safezone.component';
import { AdminNotificationComponent } from './admin/admin-notification/admin-notification.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CommentComponent } from './comment/comment.component';
import { LoaderComponent } from './loader/loader.component';
import { SafezoneNotificationComponent } from './safezone/safezone-notification/safezone-notification.component';


const myFirebaseConfig = {
  apiKey: 'AIzaSyD6nlHIJEI_G86VdmmhrU9hEK530-Ff9_g',
  authDomain: 'viaje-app.firebaseapp.com',
  databaseURL: 'https://viaje-app.firebaseio.com',
  storageBucket: 'viaje-app.appspot.com',
}

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

@NgModule({
  declarations: [
    AppComponent,
    AdminHomeComponent,
    UserSignupComponent,
    MotoristFormComponent,
    SafezoneFormComponent,
    NavbarComponent,
    MapComponent,
    AdminMotoristComponent,
    AdminSafezoneComponent,
    AdminNotificationComponent,
    UserLoginComponent,
    UserProfileComponent,
    HomepageComponent,
    CommentComponent,
    LoaderComponent,
    SafezoneNotificationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ROUTING,
    AngularFireModule.initializeApp(myFirebaseConfig, myFirebaseAuthConfig),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBAe8thTIIikNvgLp7DDLNK0OeFOUyLf9o',
      libraries: ['visualization']
    })
  ],
  providers: [UserService,AuthGuard,AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
