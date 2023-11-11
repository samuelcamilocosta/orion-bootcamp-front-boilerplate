import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ISolesDataInterface } from 'src/app/interfaces/soles-data-interface';
import { environment } from 'src/environment/environment';
import { BaseMethods } from './base-methods';

@Injectable({
  providedIn: 'root',
})
export class SolesService extends BaseMethods {
  private readonly apiUrl: string;

  constructor(private http: HttpClient, dialog: MatDialog) {
    super(dialog);
    this.apiUrl = `${environment.api}/v1/soles`;
  }

  async getData(): Promise<ISolesDataInterface[]> {
    return new Promise<ISolesDataInterface[]>((resolve, reject) => {
      const request = this.http
        .get<ISolesDataInterface[]>(this.apiUrl)
        .toPromise();

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
