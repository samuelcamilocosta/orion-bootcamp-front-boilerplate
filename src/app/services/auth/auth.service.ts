import { Injectable } from '@angular/core';
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
    const tokenLocal = this.storageService.getLocalItem('token');
    const tokenSession = this.storageService.getSessionItem('token');

    if (tokenLocal || tokenSession) return true;
    return false;
  }
}
