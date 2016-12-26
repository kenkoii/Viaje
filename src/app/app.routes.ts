import { AdminHomeComponent } from "./admin-home/admin-home.component";
import { UserSignupComponent } from './user-signup/user-signup.component';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const APP_ROUTES: Routes =[
  { path: 'admin', component: AdminHomeComponent, pathMatch: 'full'},
  { path: 'signup', component: UserSignupComponent, pathMatch: 'full'},

];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
