import { Injectable } from '@angular/core';
import { ConfirmationModalParams } from 'src/app/interfaces/confirmation-modal-params';
import { BaseMethods } from './base-methods';

@Injectable({
  providedIn: 'root',
})
export class ChangePasswordService extends BaseMethods {
  newPasswordModalParams: ConfirmationModalParams = {
    title: 'Sucesso!',
    paragraphA: 'Senha criada com sucesso!',
    paragraphB: 'Realize o login com sua nova senha.',
    icon: 'assets/images/action/check_circle_outline_24px.svg',
  };

  async changePassword() {
    this.openSuccessesDialog(this.newPasswordModalParams);
  }
}
