import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginTemplateComponent } from './login-template.component';
import {FormsModule} from "@angular/forms";


const routes: Routes = [
  { path: '', component: LoginTemplateComponent }
];

@NgModule({
  declarations: [
    LoginTemplateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class LoginTemplateModule { }
