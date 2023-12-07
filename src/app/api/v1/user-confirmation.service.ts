import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpMethod } from 'src/app/enum/http-method.enum';
import { ConfirmationModalParams } from 'src/app/interfaces/confirmation-modal-params';
import { ConfirmationToken } from 'src/app/interfaces/confirmation-token';
import { BaseMethods } from './base-methods';

@Injectable({
  providedIn: 'root',
})

/**
 * UserConfirmationService
 *
 * service that handles the user confirmationToken received from url
 */
export class UserConfirmationService extends BaseMethods {
  /**
   * userConfirmation: success modal params
   */
  userConfirmation: ConfirmationModalParams = {
    title: 'Sucesso!',
    message: `
    Usuário confirmado com sucesso!
    `,
    icon: 'assets/images/action/check_circle_outline_24px.svg',
  };

  /**
   * confirmUser
   *
   * method Http Post request to send the confirmationToken to the database for user validation
   *
   * @param token: token @type {ConfirmationToken} to be sent to the database
   * @returns a Promise @type {HttpResponse<any>}
   */
  async confirmUser(token: ConfirmationToken): Promise<HttpResponse<any>> {
    return new Promise<HttpResponse<any>>((resolve, reject) => {
      const request = this.HttpRequest(
        HttpMethod.POST,
        'v1/user-confirmation',
        token
      );

      request
        .then((response: HttpResponse<any> | undefined) => {
          if (response && response.status === 204) {
            this.openSuccessesDialog(this.userConfirmation);
            resolve(response);
          } else {
            reject(
              this.openErrorDialog(
                'Ocorreu algum erro de conexão ou erro interno, resposta recebida como vazia'
              )
            );
          }
        })
        .catch((error) => {
          this.handleError(error);

          reject(error);
        });
    });
  }
}
