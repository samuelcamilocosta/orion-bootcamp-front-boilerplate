import { Injectable } from '@angular/core';
import { HttpMethod } from 'src/app/enum/http-method.enum';
import { PaymentCardParams } from 'src/app/interfaces/payment-card-params';
import { BaseMethods } from './base-methods';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionPaymentService extends BaseMethods {
  /**
   * getParams
   *
   * method to get the monthly subscription card params from api
   *
   * @returns A promise that resolves with the monthly card params response data.
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
