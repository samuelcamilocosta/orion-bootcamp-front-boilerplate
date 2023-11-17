import { Injectable } from '@angular/core';
import { IUser } from 'src/app/interfaces/user-interface';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root',
})
/**
 * A service responsible for managing user authentication and storage of access tokens.
 */
export class AuthService {
  constructor(private storageService: StorageService) {}
  /**
   * Checks if the user is authenticated by checking for the presence of an access token
   * in either local or session storage.
   *
   * @returns `true` if the user is authenticated; otherwise, `false`.
   */
  isAuthenticated(): boolean {
    const token = this.getUser('token');

    if (token) return true;
    return false;
  }

  /**
   * isPremium
   *
   * checks the user type to limits his access to application
   *
   * @returns 'true' if it's a "Premium" user, 'false' otherwise
   */
  isPremium() {
    const role = this.getUser('role');

    return role === 'Premium';
  }

  /**
   * getUser
   *
   * gets the user data from local/session storage
   *
   * @param key parameter to get from the 'user' on local/session storage
   * @returns a string of 'user' role or 'user' accessToken
   */
  private getUser(key: string): string {
    let user: IUser;

    if (localStorage.length === 0) {
      user = JSON.parse(this.storageService.getSessionItem('user'));
    } else {
      user = JSON.parse(this.storageService.getLocalItem('user'));
    }

    const userData = key === 'role' ? user.role : user.accessToken;

    return userData;
  }
}
