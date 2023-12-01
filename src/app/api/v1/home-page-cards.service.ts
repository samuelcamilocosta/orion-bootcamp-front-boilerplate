import { Injectable } from '@angular/core';
import { HttpMethod } from 'src/app/enum/http-method.enum';
import { ICard } from 'src/app/interfaces/card-params-interface';
import { HomeCardResponse } from 'src/app/interfaces/home-card-response';
import { BaseMethods } from './base-methods';

@Injectable({
  providedIn: 'root',
})

/**
 * HomePageCardsService
 *
 * service that handles HTTP GET request on Home-page
 */
export class HomePageCardsService extends BaseMethods {
  /**
   * getHomeCardsData
   *
   * method to handle HTTP GET request from api
   *
   * @returns A promise that resolves to an array of @type {ICard}
   */
  async getHomeCardsData(): Promise<ICard[]> {
    return new Promise<ICard[]>((resolve, reject) => {
      const request = this.HttpRequest<HomeCardResponse[]>(
        HttpMethod.GET,
        'v1/get-home-page-cards'
      );

      // array of path to be parsed on the fetched data.
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
            // TODO: remover forEach quando receber os paths da home na response
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
