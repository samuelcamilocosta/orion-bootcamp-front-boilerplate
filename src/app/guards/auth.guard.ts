import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

/**
 * A route guard function to protect routes.
 */
export const AuthGuard: CanActivateFn = () => {
  const user = inject(AuthService);
  const router = inject(Router);

  if (user.isAuthenticated()) {
    return true;
  } else {
    router.navigate(['']); // Redirect to the login-page route when authentication fails.

    return false;
  }
};
