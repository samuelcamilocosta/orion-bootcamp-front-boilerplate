import { Injectable } from '@angular/core';
import { ILoginRespParams } from 'src/app/interfaces/login-resp-params-interface';

@Injectable({
  providedIn: 'root',
})
/**
 * A service responsible for managing user authentication and storage of access tokens.
 */
export class AuthService {
  private localStorage: Storage;
  private sessionStorage: Storage;

  /**
   * Constructs the AuthService and initializes local and session storage.
   */
  constructor() {
    this.localStorage = window.localStorage;
    this.sessionStorage = window.sessionStorage;
  }

  /**
   * Sets an access token in local storage.
   *
   * @param key - The key to store the access token under.
   * @param value - The access token to store.
   * @returns `true` if the access token was successfully stored; otherwise, `false`.
   */
  setLocalItem(key: string, value: ILoginRespParams): boolean {
    if (this.localStorage) {
      this.localStorage.setItem(key, value.user.accessToken);
      return true;
    }

    return false;
  }

  /**
   * Sets an access token in session storage.
   *
   * @param key - The key to store the access token under.
   * @param value - The access token to store.
   * @returns `true` if the access token was successfully stored; otherwise, `false`.
   */
  setSessionItem(key: string, value: ILoginRespParams): boolean {
    if (this.sessionStorage) {
      this.sessionStorage.setItem(key, value.user.accessToken);
      return true;
    }

    return false;
  }

  /**
   * Retrieves an item from local storage.
   *
   * @param key - The key to retrieve from local storage.
   * @returns The stored value associated with the key, or `null` if not found.
   */
  getLocalItem(key: string): string | null {
    if (this.localStorage) {
      return this.localStorage.getItem(key);
    }
    return null;
  }

  /**
   * Retrieves an item from session storage.
   *
   * @param key - The key to retrieve from session storage.
   * @returns The stored value associated with the key, or `null` if not found.
   */
  getSessionItem(key: string): string | null {
    if (this.sessionStorage) {
      return this.sessionStorage.getItem(key);
    }
    return null;
  }

  /**
   * Removes an item from both local and session storage.
   *
   * @param key - The key to remove from storage.
   */
  removeItem(key: string) {
    this.localStorage.removeItem(key);
    this.sessionStorage.removeItem(key);
  }

  /**
   * Checks if the user is authenticated by checking for the presence of an access token
   * in either local or session storage.
   *
   * @returns `true` if the user is authenticated; otherwise, `false`.
   */
  isAuthenticated(): boolean {
    const tokenLocal = this.getLocalItem('token');
    const tokenSession = this.getSessionItem('token');

    if (tokenLocal || tokenSession) return true;
    return false;
  }
}
