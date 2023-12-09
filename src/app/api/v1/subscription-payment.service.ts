import { Injectable } from '@angular/core';
import { HttpMethod } from 'src/app/enum/http-method.enum';
import { ConfirmationModalParams } from 'src/app/interfaces/confirmation-modal-params';
import { PaymentCardParams } from 'src/app/interfaces/payment-card-params';
import { IUser } from 'src/app/interfaces/user-interface';
import { BaseMethods } from './base-methods';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionPaymentService extends BaseMethods {
  /**
   * recoveryConfirmation: success modal params
   */
  subscriptionSuccess: ConfirmationModalParams = {
    title: 'Sucesso!',
    message: `
    Pagamento realizado com sucesso!
    Você já pode ter acesso a todos os privilégios
    da conta premium.
    `,
    icon: 'assets/images/action/check_circle_outline_24px.svg',
  };

  /**
   * checkout
   *
   * method to handle the subscription checkout
   *
   * @returns A promise that resolves with the HttpResponse data.
   */
  async checkout(data: PaymentCardParams): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const request = this.HttpRequest<Promise<any>>(
        HttpMethod.POST,
        'v1/card-payment',
        data
      );

      request
        .then((response) => {
          if (response && response.status === 200) {
            this.openSuccessesDialog(this.subscriptionSuccess);

            if (localStorage.length === 0) {
              const user: IUser = JSON.parse(
                this.storageService.getSessionItem('user')
              );
              user.role = 'Premium';
              this.storageService.setSessionItem('user', JSON.stringify(user));
            } else {
              const user: IUser = JSON.parse(
                this.storageService.getLocalItem('user')
              );
              user.role = 'Premium';
              this.storageService.setLocalItem('user', JSON.stringify(user));
            }

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
