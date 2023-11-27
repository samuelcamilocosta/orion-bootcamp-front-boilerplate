import { Injectable } from '@angular/core';
import { HttpMethod } from 'src/app/enum/http-method.enum';
import { ICard } from 'src/app/interfaces/card-params-interface';
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
  async getPlanCardsData(): Promise<ICard[]> {
    return new Promise<ICard[]>((resolve, reject) => {
      const request = this.HttpRequest<PlanCardResponse[]>(
        HttpMethod.GET,
        'v1/plan-cards'
      );

      // array of path to be parsed on fetched data
      const paths: string[] = ['plano_pesquisador', ''];

      request
        .then((response) => {
          if (response) {
            //placeholder until the fetched data is of the correctly type.
            const newResponse: ICard[] = response.map((card, index) => {
              return {
                cardImage: card.planCardImage,
                cardImageDescription: '',
                cardTitle: card.planCardTitle,
                cardDescription: card.planCardDescription,
                cardButtonText: card.planCardButtonText,
                path: paths[index],
              };
            });
            resolve(newResponse);
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
