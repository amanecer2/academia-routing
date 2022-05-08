import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'academia-routing';

  active = 1;

  setActive(number: number) {
    this.active = number
  }
}
