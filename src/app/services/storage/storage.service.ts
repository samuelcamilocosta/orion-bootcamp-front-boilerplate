import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private localStorage: Storage;
  private sessionStorage: Storage;

  /**
   * constructor
   *
   * initializes local and session storage.
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
  setLocalItem(key: string, value: any): boolean {
    if (this.localStorage) {
      this.localStorage.setItem(key, value);
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
  setSessionItem(key: string, value: any): boolean {
    if (this.sessionStorage) {
      this.sessionStorage.setItem(key, value);
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
  getLocalItem(key: string): any {
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
  getSessionItem(key: string): any {
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
}
