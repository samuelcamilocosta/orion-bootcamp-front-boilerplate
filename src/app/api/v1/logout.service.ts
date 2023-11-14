import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage/storage.service';
import { environment } from 'src/environment/environment';
import { BaseMethods } from './base-methods';

@Injectable({
  providedIn: 'root',
})

/**
 * LogoutService
 *
 * service that handles the user authentication removal
 */
export class LogoutService extends BaseMethods {
  private readonly apiURL: string;

  /**
   * constructor
   *
   * @param storageService Service that handles the local/session storage methods
   * @param dialog - Instance of BaseMethod class for displaying error dialogs.
   * @param route - The Router service for navigation.
   * @param http - The HttpClient service for making HTTP requests.
   */
  constructor(
    private storageService: StorageService,
    private http: HttpClient,
    private route: Router,
    dialog: MatDialog
  ) {
    /**
     * Initializes the apiURL and the dialog
     */
    super(dialog);

    this.apiURL = `${environment.api}/v1/logout`;
  }

  /**
   * removeAuth
   *
   * handles the http PATCH request response and error from API
   */
  async removeAuth(): Promise<void> {
    try {
      const token = this.getTokenFromStorage();

      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
      });

      await this.http.patch(this.apiURL, {}, { headers }).toPromise();

      this.storageService.removeItem('token');

      this.route.navigate(['/']);
    } catch (error) {
      if (error instanceof HttpErrorResponse) {
        this.handleError(error);
      } else {
        throw error;
      }
    }
  }

  /**
   * getTokenFromStorage
   *
   * method to get a token from local/session storage
   *
   * @returns an user authentication token from local or session storage
   */

  private getTokenFromStorage(): string {
    return localStorage.length === 0
      ? this.storageService.getSessionItem('token')
      : this.storageService.getLocalItem('token');
  }
}
