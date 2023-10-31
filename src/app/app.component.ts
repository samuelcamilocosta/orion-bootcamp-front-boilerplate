import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'boilerplate-frontend-orion-bootcamp';  

  constructor(private router: Router) {}

  /**
   * Subscribe to router events to detect route changes
   */
  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        /**
         * Changes in HTML
         */
      }
    })
  }

  /**
   * Check if the current route is 'home'
   * @returns the 'home' route
   */
  isHomeRoute(): boolean {
    return this.router.url === '/home';
  }

  /**
   * Check if the current route is 'meteorology'
   * @returns the 'meteorology' route
   */
  isMeteorologyRoute(): boolean {
    return this.router.url === '/meteorology';
  }


}
