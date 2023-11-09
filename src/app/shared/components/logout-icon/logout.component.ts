import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

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
    private route: Router // private googleAnalyticsService: GoogleAnalyticsService
  ) {}

  /**
   * logout
   *
   * Logs user out by removing access token from local and session storage
   * and redirects him to login page.
   */
  logout(): void {
    this.auth.removeItem('token');
    this.route.navigate(['/']);
  }
}
