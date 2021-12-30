import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component'
import { AboutComponent } from '../about/about.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { SignupComponent } from '../signup/signup.component';

const routes: Routes = [
  { path:'about',component:AboutComponent},
  { path:'login',component:LoginComponent},
  { path:'register',component:RegisterComponent},
  { path:'Dashboard',component:DashboardComponent},
  { path:'signup',component:SignupComponent},
  ];

  @NgModule({
  imports: [
  RouterModule.forRoot(routes),
  CommonModule
  ],
  exports: [
  RouterModule
  ],
  declarations: []
  })
  export class AppRoutingModule { }
