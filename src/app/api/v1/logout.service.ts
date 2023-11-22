import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpMethod } from 'src/app/enum/http-method.enum';
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
  /**
   * constructor
   *
   * @param route - The Router service for navigation.
   */
  constructor(private route: Router) {
    super();
  }

  /**
   * removeAuth
   *
   * handles the http PATCH request/response from logout endpoint
   */
  async removeAuth(): Promise<void> {
    try {
      await this.HttpRequest(HttpMethod.PATCH, 'v1/logout', {});

      this.storageService.removeItem('user');

      this.route.navigate(['/']);
    } catch (error) {
      if (error instanceof HttpErrorResponse) {
        this.handleError(error);
      } else {
        throw error;
      }
    }
  }
}
