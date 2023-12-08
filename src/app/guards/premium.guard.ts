// premium.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})

/**
 * PremiumGuard
 *
 * class that implements CanActivate to check if a user has premium access.
 */
export class PremiumGuard implements CanActivate {
  /**
   * constructor
   *
   * @param authService: A service responsible for verifying user authentication through local/session storage user data.
   * @param router: An instance of the Router for navigation.
   */
  constructor(private authService: AuthService, private router: Router) {}

  /**
   * CanActivate
   *
   * method to determine if the route can be activated.
   *
   * @returns 'true' if the user has premium access, otherwise navigates to the home page
   * and returns 'false'.
   */
  canActivate(): boolean {
    if (this.authService.isPremium()) {
      return true;
    } else {
      this.router.navigate(['/page/home']);
      return false;
    }
  }
}
