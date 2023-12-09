import { Injectable } from '@angular/core';
import { HttpMethod } from 'src/app/enum/http-method.enum';
import { SubscriptionCardParams } from 'src/app/interfaces/subscription-card-params';
import { BaseMethods } from './base-methods';

@Injectable({
  providedIn: 'root',
})

/**
 * SubscriptionCardsParamsService
 *
 * service that handles the subscription cards params
 */
export class SubscriptionCardsParamsService extends BaseMethods {
  /**
   * getParams
   *
   * method to get the monthly subscription card params from api
   *
   * @returns A promise that resolves with the monthly card params response data.
   */
  async getParams(): Promise<SubscriptionCardParams> {
    return new Promise<SubscriptionCardParams>((resolve, reject) => {
      const request = this.HttpRequest<Promise<SubscriptionCardParams>>(
        HttpMethod.GET,
        'v1/plans/1'
      );

      request
        .then((response) => {
          if (response) {
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
