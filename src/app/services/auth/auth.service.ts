import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root',
})
/**
 * A service responsible for verifying user authentication through local/session storage user data.
 */
export class AuthService {
  /**
   * constructor
   *
   * injects StorageService to handle local/session storage methods.
   */
  constructor(private storageService: StorageService) {}

  /**
   * isAuthenticated
   *
   * Checks if the user is authenticated by checking for the presence of an access token
   * in either local or session storage.
   *
   * @returns `true` if the user is authenticated; otherwise, `false`.
   */
  isAuthenticated(): boolean {
    return this.storageService.getUserToken() ? true : false;
  }

  /**
   * isPremium
   *
   * checks the user role to limits his access to application
   *
   * @returns 'true' if is "Premium", false otherwise
   */
  isPremium() {
    return this.storageService.getUserRole() === 'Premium';
  }
}
