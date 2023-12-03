import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpMethod } from 'src/app/enum/http-method.enum';
import { ILoginParams } from 'src/app/interfaces/login-params.interface';
import { ILoginRespParams } from 'src/app/interfaces/login-resp-params-interface';
import { IUser } from 'src/app/interfaces/user-interface';
import { BaseMethods } from './base-methods';

@Injectable({
  providedIn: 'root',
})

/**
 * LoginService
 *
 * Service that handles the login request.
 */
export class LoginService extends BaseMethods {
  /**
   * Constructor
   *
   * @param route - The Router service for navigation.
   */

  constructor(private route: Router) {
    super();
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
      const request = this.HttpRequest<ILoginRespParams>(
        HttpMethod.POST,
        'v1/login',
        data
      );

      request
        .then((response: HttpResponse<ILoginRespParams> | undefined) => {
          if (response && response.body) {
            const userAuth: IUser = {
              role: response.body.user.role,
              accessToken: response.body.user.accessToken,
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
