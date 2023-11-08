import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { GoogleAnalyticsService } from 'src/app/services/metrics/google-analytics.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})

/**
 * LogoutComponent
 *
 * a button component that removes the user authentication and redirects him
 */
export class LogoutComponent {
  constructor(
    private auth: AuthService,
    private route: Router,
    private googleAnalyticsService: GoogleAnalyticsService
  ) {}

  /**
   * logout
   *
   * Logs user out by removing access token from local and session storage
   * and redirects him to login page.
   */
  logout(): void {
    this.trackLogout();
    this.auth.removeItem('token'); // Remove the user's authentication token.
    this.route.navigate(['/']); // Navigate to the home page.
  }

  /**
   * trackLogout
   *
   * track the button "LOGOUT" click count from the every page
   */
  trackLogout(): void {
    this.googleAnalyticsService.trackEvent(
      'logout_button_click',
      'button_interaction',
      'Log-out from application',
      1
    );
  }
}
