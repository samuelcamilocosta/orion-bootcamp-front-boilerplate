import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

/**
 * AuthGuard
 *
 * Guard class that implements CanActivate to check if a user has token access.
 */
@Injectable()
export class AuthGuard implements CanActivate {
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
   * @returns 'true' if the user has token access, otherwise navigates to the login page
   * and returns 'false'.
   */
  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }
}
