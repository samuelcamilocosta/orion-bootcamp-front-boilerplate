import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ISolesDataInterface } from 'src/app/interfaces/soles-data-interface';
import { environment } from 'src/environment/environment';
import { BaseMethods } from './base-methods';

@Injectable({
  providedIn: 'root',
})

/**
 * Service that handles the get http request from meteorology page
 */
export class SolesService extends BaseMethods {
  private readonly apiUrl: string;

  /**
   * constructor
   *
   * @param http - The HttpClient service for making HTTP requests.
   * @param dialog - Instance of BaseMethod class for displaying error dialogs.
   */
  constructor(private http: HttpClient, dialog: MatDialog) {
    super(dialog);
    this.apiUrl = `${environment.api}/v1/soles`;
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
      const request = this.http
        .get<ISolesDataInterface[]>(this.apiUrl)
        .toPromise();
      request
        .then((response) => {
          if (response) {
            response.forEach((data) => {
              data.terrestrialDate = new Date(data.terrestrialDate);
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
