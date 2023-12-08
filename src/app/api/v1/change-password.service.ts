import { Injectable } from '@angular/core';
import { HttpMethod } from 'src/app/enum/http-method.enum';
import { ConfirmationModalParams } from 'src/app/interfaces/confirmation-modal-params';
import { NewPasswordRequest } from 'src/app/interfaces/new-password-request';
import { BaseMethods } from './base-methods';

@Injectable({
  providedIn: 'root',
})

/**
 * ChangePasswordService
 *
 * service that handles the password reset
 */
export class ChangePasswordService extends BaseMethods {
  newPasswordModalParams: ConfirmationModalParams = {
    title: 'Sucesso!',
    message: `
    Senha criada com sucesso!
    Realize o login com sua nova senha.
    `,
    icon: 'assets/images/action/check_circle_outline_24px.svg',
  };

  /**
   * changePassword
   *
   * method to handle http POST request
   *
   * @param data parameter @type {NewPasswordRequest} to be sent to the api
   * @returns
   */
  async changePassword(data: NewPasswordRequest) {
    return new Promise<any>((resolve, reject) => {
      const request = this.HttpRequest(HttpMethod.POST, 'v1/reset', data);

      request
        .then((response) => {
          if (response && response.status === 200) {
            this.openSuccessesDialog(this.newPasswordModalParams);

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
