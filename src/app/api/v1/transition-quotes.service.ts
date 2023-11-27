import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpMethod } from 'src/app/enum/http-method.enum';
import { QuotesResponse } from 'src/app/interfaces/quotes-response-interface';
import { BaseMethods } from './base-methods';

@Injectable({
  providedIn: 'root',
})

/**
 * TransitionQuotesService
 *
 * service that handles the HTTP GET request from api for TransitionModalComponent
 *
 * @returns A promise that resolves to an array of @type {Promise<QuotesResponse[]>}
 */
export class TransitionQuotesService extends BaseMethods {
  async getQuotes(): Promise<QuotesResponse[]> {
    return new Promise<QuotesResponse[]>((resolve, reject) => {
      const params = new HttpParams().set('count', 2);

      const request = this.HttpRequest<QuotesResponse[]>(
        HttpMethod.GET,
        'v1/quotes/random',
        {},
        params
      );

      request
        .then((response) => {
          response
            ? resolve(response)
            : reject(
                this.openErrorDialog(
                  'Ocorreu algum erro de conexão ou erro interno, resposta recebida como vazia'
                )
              );
        })
        .catch((error) => {
          this.handleError(error);

          reject(error);
        });
    });
  }
}
