import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiV1Service } from 'src/app/api/v1/login.service';
import { IEmail } from 'src/app/interfaces/recovery-params';
import { PasswordRecoveryDialogComponent } from 'src/app/shared/components/password-recovery-dialog/password-recovery-dialog.component';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
/**
 * Service that handles the recovery page request
 */
export class RecoveryService {
  private readonly apiURL: string;

  /**
   * Constructor *\
   *
   * @param fb - An instance of FormBuilder for form creation.
   * @param loginService - An instance of the ApiV1Service for login-related API calls.
   * @param auth - An instance of the AuthService for authentication.
   * @param route - An instance of the Router for navigation.
   */
  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private route: Router,
    private apiV1Service: ApiV1Service
  ) {
    /**
     * Initializes the apiURL path
     */
    this.apiURL = `${environment.api}/v1/recovery`;
  }

  /**
   * openDialog
   *
   * opens a dialog message for better user experience
   */
  openDialog(): void {
    this.dialog.open(PasswordRecoveryDialogComponent);
  }

  /**
   * sendEmail
   *
   * Sends recovery password data to the API and handles the response.
   *
   * @param email the email data to send
   * @returns A promise that resolves with the login response data.
   */
  // async sendEmail(email: IEmail): Promise<HttpErrorResponse> {
  //   return new Promise<HttpErrorResponse>((resolve, reject) => {
  //     const request = this.http
  //       .post<HttpErrorResponse>(this.apiURL, email)
  //       .toPromise();

  //     request
  //       .then((response) => {
  //         this.route.navigate(['/']);
  //         setTimeout(() => {
  //           this.openDialog();
  //         }, 500);

  //         resolve(response);
  //       })
  //       .catch((error: HttpErrorResponse) => {
  //         if (error.status === 400 || error.status === 200) {
  //           this.route.navigate(['/']);
  //           setTimeout(() => {
  //             this.openDialog();
  //           }, 500);
  //         } else {
  //           this.apiV1Service.handleError(error);
  //         }

  //         reject(error);
  //       });
  //   });
  // }

  async sendEmail(email: IEmail) {
    try {
      const response = await this.http
        .post<HttpErrorResponse>(this.apiURL, email)
        .toPromise();
      // The HTTP request was successful, handle the response as needed
      this.route.navigate(['/']);
      setTimeout(() => {
        this.openDialog();
      }, 500);
      return response;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
