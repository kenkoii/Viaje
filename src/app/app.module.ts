import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ROUTING }  from './app.routes';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { AppComponent } from './app.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { MotoristFormComponent } from './user-signup/motorist-form/motorist-form.component';
import { SafezoneFormComponent } from './user-signup/safezone-form/safezone-form.component';
import { NavbarComponent } from './navbar/navbar.component';


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
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ROUTING,
    AngularFireModule.initializeApp(myFirebaseConfig, myFirebaseAuthConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
