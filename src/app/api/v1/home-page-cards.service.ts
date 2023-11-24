import { Injectable } from '@angular/core';
import { HttpMethod } from 'src/app/enum/http-method.enum';
import { ICard } from 'src/app/interfaces/card-params-interface';
import { HomeCardResponse } from 'src/app/interfaces/home-card-response';
import { BaseMethods } from './base-methods';

@Injectable({
  providedIn: 'root',
})
export class HomePageCardsService extends BaseMethods {
  async getHomeCardsData(): Promise<ICard[]> {
    return new Promise<ICard[]>((resolve, reject) => {
      const request = this.HttpRequest<HomeCardResponse[]>(
        HttpMethod.GET,
        'v1/get-home-page-cards'
      );
      const paths: string[] = [
        '/page/meteorology',
        '/page/viagens-marte',
        '/page/noticias-marte',
        '/page/mars-map',
        '',
        '',
      ];

      request
        .then((response) => {
          if (response) {
            const newResponse: ICard[] = response.map((card, index) => {
              return {
                cardImage: card.image,
                cardAltText: '',
                cardTitle: card.title,
                cardDescription: card.description,
                cardButtonText: card.access,
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
