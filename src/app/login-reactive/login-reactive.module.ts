import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginReactiveComponent } from './login-reactive.component';
import {ReactiveFormsModule} from "@angular/forms";


const routes: Routes = [
  { path: '', component: LoginReactiveComponent }
];

@NgModule({
  declarations: [
    LoginReactiveComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class LoginReactiveModule { }
