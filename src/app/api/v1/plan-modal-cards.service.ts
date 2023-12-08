import { Injectable } from '@angular/core';
import { HttpMethod } from 'src/app/enum/http-method.enum';
import { PlanCardResponse } from 'src/app/interfaces/plan-card-response';
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
  async getPlanCardsData(): Promise<PlanCardResponse[]> {
    return new Promise<PlanCardResponse[]>((resolve, reject) => {
      const request = this.HttpRequest<PlanCardResponse[]>(
        HttpMethod.GET,
        'v1/plan-cards'
      );

      request
        .then((response) => {
          if (response && response.body) {
            response.body.forEach((resp) => {
              return (resp.cardPath = `plan/${resp.id}`);
            });

            resolve(response.body);
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
