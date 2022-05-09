import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemsComponent } from './items/items.component';
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'users', //localhost/users
    component: UsersComponent,
  },
  {
    path: 'dashboard',//localhost/dashboard
    component: DashboardComponent
  },
  {
    path: 'items',
    component: ItemsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    DashboardComponent,
    ItemsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
