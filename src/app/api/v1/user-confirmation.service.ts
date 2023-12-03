import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpMethod } from 'src/app/enum/http-method.enum';
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
   * confirmUser
   *
   * method Http Post request to send the confirmationToken to the database for user validation
   *
   * @param confirmToken: token @type {string} to be sent to the database
   * @returns a Promise @type {HttpResponse<any>}
   */
  async confirmUser(confirmToken: any): Promise<HttpResponse<any>> {
    return new Promise<HttpResponse<any>>((resolve, reject) => {
      const request = this.HttpRequest(
        HttpMethod.POST,
        'v1/user-confirmation',
        confirmToken
      );

      request
        .then((response: HttpResponse<any> | undefined) => {
          if (response && response.status === 201) {
            this.openSuccessesDialog();
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
