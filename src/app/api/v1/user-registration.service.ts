import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpMethod } from 'src/app/enum/http-method.enum';
import { ConfirmationModalParams } from 'src/app/interfaces/confirmation-modal-params';
import { RegistrationData } from 'src/app/interfaces/registration-data';
import { AgreementModalComponent } from 'src/app/shared/components/agreement-modal/agreement-modal.component';
import { PrivacyPolicyModalComponent } from 'src/app/shared/components/privacy-policy-modal/privacy-policy-modal.component';
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
   * userRegistration: success modal params
   */
  userRegistration: ConfirmationModalParams = {
    title: 'Sucesso!',
    message: `
    Usuário cadastrado com sucesso!
  
    A confirmação deve ser realizada em até 24 horas, siga as instruções enviadas em seu e-mail.`,
    icon: 'assets/images/action/check_circle_outline_24px.svg',
  };

  /**
   * openAgreement
   *
   * method that opens the User Agreement Term modal
   */
  openAgreement(): void {
    this.dialog.open(AgreementModalComponent, {
      disableClose: true,
      panelClass: 'custom-border-radius',
    });
  }

  /**
   * openPrivacy
   *
   * method that opens the Privacy Policy Term modal
   */
  openPrivacy(): void {
    this.dialog.open(PrivacyPolicyModalComponent, {
      disableClose: true,
      panelClass: 'custom-border-radius',
    });
  }

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
          if (response && response.status === 204) {
            this.openSuccessesDialog(this.userRegistration);
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
