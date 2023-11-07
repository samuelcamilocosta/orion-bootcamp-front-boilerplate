import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'boilerplate-frontend-orion-bootcamp';

  constructor(private router: Router) {}

  /**
   * Check if the current route is different of '/' and '/recovery'
   * @returns 'true' if it is different a route, 'false' otherwise
   */
  isAuthPage(): boolean {
    if (this.router.url !== '/' && this.router.url !== '/recovery') {
      return true;
    }
    return false;
  }

  /**
   * Future transition page
   */
  isTransitionPage(): void {
    // return this.router.url === '/transition';
  }
}
