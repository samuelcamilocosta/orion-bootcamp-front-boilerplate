import { Injectable } from '@angular/core';
import { HttpMethod } from 'src/app/enum/http-method.enum';
import { ConfirmationModalParams } from 'src/app/interfaces/confirmation-modal-params';
import { NewPasswordRequest } from 'src/app/interfaces/new-password-request';
import { BaseMethods } from './base-methods';

@Injectable({
  providedIn: 'root',
})
export class ChangePasswordService extends BaseMethods {
  newPasswordModalParams: ConfirmationModalParams = {
    title: 'Sucesso!',
    paragraphA: 'Senha criada com sucesso!',
    paragraphB: 'Realize o login com sua nova senha.',
    icon: 'assets/images/action/check_circle_outline_24px.svg',
  };

  async changePassword(data: NewPasswordRequest) {
    return new Promise<any>((resolve, reject) => {
      const request = this.HttpRequest(HttpMethod.POST, 'v1/reset', data);

      request
        .then((response) => {
          if (response) {
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
