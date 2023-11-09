import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IEmail } from 'src/app/interfaces/recovery-params';
import { environment } from 'src/environment/environment';
import { BaseMethods } from './base-methods';

@Injectable({
  providedIn: 'root',
})
/**
 * Service that handles the recovery page API request
 */
export class RecoveryService extends BaseMethods {
  private readonly apiURL: string;

  /**
   * Constructor *\
   * @param http - The HttpClient service for making HTTP requests.
   * @param route - An instance of the Router for navigation.
   * @param dialog - Instance of BaseMethods class for displaying error dialogs.
   */
  constructor(
    private http: HttpClient,
    private route: Router,
    dialog: MatDialog
  ) {
    /**
     * Initializes the apiURL path and dialog
     */
    super(dialog);

    this.apiURL = `${environment.api}/v1/recovery`;
  }

  /**
   * sendEmail
   *
   * Sends email recovery data to the API and handles the response.
   *
   * @param email - The email to send for recovery.
   * @returns A Promise that resolves when the data is successfully sent.
   * @throws When an error occurs during the process.
   */
  async sendEmail(email: IEmail): Promise<void> {
    try {
      await this.http.post(this.apiURL, email).toPromise();

      this.route.navigate(['/']);
      setTimeout(() => {
        this.openSuccessesDialog();
      }, 500);
    } catch (error) {
      if (error instanceof HttpErrorResponse) {
        this.handleError(error);
      } else {
        throw error;
      }
    }
  }
}
