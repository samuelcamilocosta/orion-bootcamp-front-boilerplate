import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

/**
 *  The root component of the Angular application.
 */
export class AppComponent {
  /**
   * The title displayed in the browser's title bar.
   */
  title = 'boilerplate-frontend-orion-bootcamp';

  /**
   * Constructor
   *
   * @param router An instance of the Router for navigation.
   */
  constructor(private router: Router) {}

  /**
   * isPrivatePage
   *
   * Check if the current route is a private page
   * @returns 'true' if it is then add a class, 'false' otherwise and do nothing.
   */
  isPrivatePage(): boolean {
    return this.router.url.includes('/page') ? true : false;
  }
}
