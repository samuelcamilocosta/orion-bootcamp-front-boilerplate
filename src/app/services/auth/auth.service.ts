import { Injectable } from '@angular/core';
import { ILoginRespParams } from 'src/app/interfaces/login-resp-params-interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Initialize local and session storage references
  private localStorage: Storage;
  private sessionStorage: Storage;

  constructor() {
    this.localStorage = window.localStorage;
    this.sessionStorage = window.sessionStorage;
  }

  // Set an item in local storage
  setLocalItem(key: string, value: ILoginRespParams): boolean {
    if (this.localStorage) {
      this.localStorage.setItem(key, value.user.accessToken);
      return true;
    }

    return false;
  }

  // Set an item in session storage
  setSessionItem(key: string, value: ILoginRespParams): boolean {
    if (this.sessionStorage) {
      this.sessionStorage.setItem(key, value.user.accessToken);
      return true;
    }

    return false;
  }

  // Get an item from local storage
  getLocalItem(key: string): string | null {
    if (this.localStorage) {
      return this.localStorage.getItem(key);
    }
    return null;
  }

  // Get an item from session storage
  getSessionItem(key: string): string | null {
    if (this.sessionStorage) {
      return this.sessionStorage.getItem(key);
    }
    return null;
  }

  // Remove an item from both local and session storage
  removeItem(key: string) {
    this.localStorage.removeItem(key);
    this.sessionStorage.removeItem(key);
  }

  // Check if the user is authenticated by looking for a token in either storage
  isAuthenticated(): boolean {
    const tokenLocal = this.getLocalItem('token');
    const tokenSession = this.getSessionItem('token');
    if (tokenLocal || tokenSession) return true;
    return false;
  }
}
