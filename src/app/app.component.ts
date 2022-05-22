import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'academia';
  active = 0;

  constructor(private router: Router) {
  }
  setActive(index = 0) {
    this.active = index;
  }

  navigateTo(to = 'dashboard') {
    //this.router.navigateByUrl('dashboard')
    this.router.navigate(['dashboard'])
  }
}
