import { Injectable } from '@angular/core';
import { HttpMethod } from 'src/app/enum/http-method.enum';
import { ISolesDataInterface } from 'src/app/interfaces/soles-data-interface';
import { BaseMethods } from './base-methods';

@Injectable({
  providedIn: 'root',
})

/**
 * Service that handles the get http request from meteorology page
 */
export class SolesService extends BaseMethods {
  /**
   * constructor
   *
   * @param http - The HttpClient service for making HTTP requests.
   * @param dialog - Instance of BaseMethod class for displaying error dialogs.
   */
  constructor() {
    super();
  }

  /**
   * getData
   *
   * handles the http GET request response and error from the API
   *
   * @returns A promise that resolves with the soles response data.
   */
  async getData(): Promise<ISolesDataInterface[]> {
    return new Promise<ISolesDataInterface[]>((resolve, reject) => {
      const request = this.HttpRequest<ISolesDataInterface[]>(
        HttpMethod.GET,
        'v1/soles'
      );

      request
        .then((response) => {
          if (response && response.body) {
            response.body.forEach((data) => {
              data.terrestrialDate = new Date(data.terrestrialDate);
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
