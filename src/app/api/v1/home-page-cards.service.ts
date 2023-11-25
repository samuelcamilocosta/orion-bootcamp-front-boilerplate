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
        '',
        '',
        '/page/mars-map',
        '',
        '',
      ];

      request
        .then((response) => {
          if (response) {
            response.forEach((resp, index) => {
              return (resp.path = paths[index]);
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
