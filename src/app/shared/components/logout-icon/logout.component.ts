import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { GoogleAnalyticsService } from 'src/app/services/metrics/google-analytics.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent {
  constructor(
    private auth: AuthService,
    private route: Router,
    private googleAnalyticsService: GoogleAnalyticsService
  ) {}

  /**
   * Logs user out by removing access token from local and session storage
   * and redirects him to login page.
   */

  logout(): void {
    this.trackLogout();
    this.auth.removeItem('token'); // Remove the user's authentication token.
    this.route.navigate(['/']); // Navigate to the home page.
  }

  trackLogout() {
    this.googleAnalyticsService.trackEvent(
      'logout_button_click',
      'button_interaction',
      'Log-out from application',
      1
    );
  }
}
