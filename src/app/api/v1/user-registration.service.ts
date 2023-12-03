import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpMethod } from 'src/app/enum/http-method.enum';
import { RegistrationData } from 'src/app/interfaces/registration-data';
import { BaseMethods } from './base-methods';

@Injectable({
  providedIn: 'root',
})

/**
 * UserRegistrationService
 *
 * service that handles the user registration
 */
export class UserRegistrationService extends BaseMethods {
  /**
   * createUser
   *
   * method Http Post request that sends user data to be registered on database
   *
   * @param data: parameter @type {RegistrationData} to be sent to the database
   * @returns a Promise @type {HttpResponse<any>}
   */
  async createUser(data: RegistrationData): Promise<HttpResponse<any>> {
    return new Promise<HttpResponse<any>>((resolve, reject) => {
      const request = this.HttpRequest(
        HttpMethod.POST,
        'v1/user-registration',
        data
      );

      request
        .then((response: HttpResponse<any> | undefined) => {
          if (response && response.status === 201) {
            this.openSuccessesDialog();
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
