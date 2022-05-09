import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'academia-routing';

  constructor(private router: Router) { }

  navigate(navigateTo: string) {
    this.router.navigateByUrl(navigateTo) // simple navigation from `localhost/`
    this.router.navigate([navigateTo]) // can have more control
  }
}
