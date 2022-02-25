import { Component } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'carbazaarV1';

  constructor(
    public router: Router
  ) {

  }
  onActivate(event: any) {
    window.scroll(0, 0);
  }
}
