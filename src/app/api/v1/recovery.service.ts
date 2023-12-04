import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpMethod } from 'src/app/enum/http-method.enum';
import { ConfirmationModalParams } from 'src/app/interfaces/confirmation-modal-params';
import { IEmail } from 'src/app/interfaces/recovery-params';
import { BaseMethods } from './base-methods';

@Injectable({
  providedIn: 'root',
})
/**
 * Service that handles the recovery page API request
 */
export class RecoveryService extends BaseMethods {
  /**
   * recoveryConfirmation: success modal params
   */
  recoveryConfirmation: ConfirmationModalParams = {
    title: 'Sucesso!',
    paragraphA: 'E-mail de recuperação enviado com sucesso!',
    paragraphB: 'Siga as instruções enviadas em seu e-mail.',
    icon: 'assets/images/action/check_circle_outline_24px.svg',
  };

  /**
   * Constructor
   *
   * @param route - An instance of the Router for navigation.
   */
  constructor(private route: Router) {
    super();
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
      this.HttpRequest(HttpMethod.POST, 'v1/recovery', email);

      this.route.navigate(['/']);

      setTimeout(() => {
        this.openSuccessesDialog(this.recoveryConfirmation);
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
