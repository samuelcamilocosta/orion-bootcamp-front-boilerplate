import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent {
  constructor(private auth: AuthService, private route: Router) {}

  /**
   * Logs user out by removing access token from local and session storage
   * and redirects him to login page.
   */

  logout(): void {
    this.auth.removeItem('token'); // Remove the user's authentication token.
    this.route.navigate(['/']); // Navigate to the home page.
  }
}
