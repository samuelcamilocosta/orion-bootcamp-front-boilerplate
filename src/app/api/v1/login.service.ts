import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpMethod } from 'src/app/enum/http-method.enum';
import { ILoginParams } from 'src/app/interfaces/login-params.interface';
import { ILoginRespParams } from 'src/app/interfaces/login-resp-params-interface';
import { IUser } from 'src/app/interfaces/user-interface';
import { TransitionModalComponent } from 'src/app/shared/components/transition-modal/transition-modal.component';
import { BaseMethods } from './base-methods';

@Injectable({
  providedIn: 'root',
})

/**
 * Service for handling API requests with the v1 endpoint.
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
   * openTransitionModal
   *
   * Opens a 100% viewport transition modal after login authentication
   */
  private openTransitionModal(): void {
    this.dialog.open(TransitionModalComponent, {
      delayFocusTrap: false,
      disableClose: true,
      enterAnimationDuration: 0,
      hasBackdrop: false,
    });
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
