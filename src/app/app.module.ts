import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import { UsersComponent } from './users/users.component';

import { DashboradComponent } from './dashborad/dashborad.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserComponent } from './users/user/user.component';
import {AuthGuard} from "./auth.guard";



export const appRouting: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  // {
  //   path: 'users/shahar',
  //   component: UserComponent,
  // },
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        data:{
          bradcrumps: 'ssss',
          auth: true
        },
        path: ':userName',
        component: UserComponent
      }
    ]
  },
  {
    path: 'dashboard',
    component: DashboradComponent
  },
  { path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),

    canActivate: [AuthGuard]

  },
  { path: 'login-template', loadChildren: () => import('./login-template/login-template.module').then(m => m.LoginTemplateModule) },
  { path: 'login-reactive', loadChildren: () => import('./login-reactive/login-reactive.module').then(m => m.LoginReactiveModule) },
  {
    path: '**',
    component: PageNotFoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    DashboradComponent,
    PageNotFoundComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouting),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
