import { AdminHomeComponent } from "./admin/admin-home/admin-home.component";
import { AdminMotoristComponent } from "./admin/admin-motorist/admin-motorist.component";
import { AdminSafezoneComponent } from "./admin/admin-safezone/admin-safezone.component";
import { AdminNotificationComponent } from "./admin/admin-notification/admin-notification.component";
import { UserSignupComponent } from './user/user-signup/user-signup.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthGuard } from './authguard.service';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const APP_ROUTES: Routes =[
  { path: 'admin', component: AdminHomeComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  { path: 'admin/motorists', component: AdminMotoristComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  { path: 'admin/safezones', component: AdminSafezoneComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  { path: 'admin/notifications', component: AdminNotificationComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  { path: 'user', component: UserProfileComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  { path: '', component: HomepageComponent, pathMatch: 'full'},
  { path: 'login', component: UserLoginComponent, pathMatch: 'full'},
  { path: 'signup', component: UserSignupComponent, pathMatch: 'full'},

];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
