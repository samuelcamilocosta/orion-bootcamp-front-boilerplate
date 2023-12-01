import { Injectable } from '@angular/core';
import { HttpMethod } from 'src/app/enum/http-method.enum';
import { ICard } from 'src/app/interfaces/card-params-interface';
import { BaseMethods } from './base-methods';

@Injectable({
  providedIn: 'root',
})

/**
 * PlanModalCardsService
 *
 * service that handles HTTP GET request on PremiumModalComponent
 */
export class PlanModalCardsService extends BaseMethods {
  async getPlanCardsData(): Promise<ICard[]> {
    return new Promise<ICard[]>((resolve, reject) => {
      const request = this.HttpRequest<ICard[]>(
        HttpMethod.GET,
        'v1/plan-cards'
      );

      request
        .then((response) => {
          if (response) {
            response.forEach((resp, index) => {
              return (resp.path = `plan/:${index + 1}`);
            });

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
