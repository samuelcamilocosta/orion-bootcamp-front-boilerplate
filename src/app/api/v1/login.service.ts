import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ILoginParams } from 'src/app/interfaces/login-params.interface';
import { ILoginRespParams } from 'src/app/interfaces/login-resp-params-interface';
import { IUser } from 'src/app/interfaces/user-interface';
import { StorageService } from 'src/app/services/storage/storage.service';
import { environment } from 'src/environment/environment';
import { BaseMethods } from './base-methods';

@Injectable({
  providedIn: 'root',
})

/**
 * Service for handling API requests with the v1 endpoint.
 */
export class ApiV1Service extends BaseMethods {
  private readonly apiURL: string;

  /**
   * Constructs the ApiV1Service.
   *
   *
   * @param storageService - Service that handles the local/session storage methods
   * @param http - The HttpClient service for making HTTP requests.
   * @param dialog - Instance of BaseMethod class for displaying error dialogs.
   * @param route - The Router service for navigation.
   */
  constructor(
    private storageService: StorageService,
    private http: HttpClient,
    private route: Router,
    dialog: MatDialog
  ) {
    /**
     * Initializes the apiURL and the dialog
     */
    super(dialog);
    this.apiURL = `${environment.api}/v1/login`;
  }

  /**
   * sendData
   *
   * Sends login data to the API and handles the response.
   *
   * @param data - The login data to send.
   * @param remember - A boolean flag indicating whether to remember the login session.
   * @returns A promise that resolves with the login response data.
   */
  async sendData(
    data: ILoginParams,
    remember: boolean
  ): Promise<ILoginRespParams> {
    return new Promise<ILoginRespParams>((resolve, reject) => {
      const request = this.http
        .post<ILoginRespParams>(this.apiURL, data)
        .toPromise();

      request
        .then((response) => {
          if (response) {
            const userAuth: IUser = {
              role: response.user.role,
              accessToken: response.user.accessToken,
            };

            remember
              ? this.storageService.setLocalItem(
                  'user',
                  JSON.stringify(userAuth)
                )
              : this.storageService.setSessionItem(
                  'user',
                  JSON.stringify(userAuth)
                );

            this.openTransitionModal();

            /**
             * Transition Modal stays open for 4.4s, after that it closes and redirects user to home page
             */
            setTimeout(() => {
              this.dialog.closeAll();

              this.route.navigate(['page/home']);
            }, 4400);

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
