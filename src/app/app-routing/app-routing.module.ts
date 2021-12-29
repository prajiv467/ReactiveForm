import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component'
import { AboutComponent } from '../about/about.component';

const routes: Routes = [
  {
    path:'about',
    component:AboutComponent,
  },
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
