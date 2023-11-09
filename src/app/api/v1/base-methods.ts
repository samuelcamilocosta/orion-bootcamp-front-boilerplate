import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { PasswordRecoveryDialogComponent } from 'src/app/shared/components/password-recovery-dialog/password-recovery-dialog.component';

export class BaseMethods {
  /**
   * Constructor
   *
   * @param dialog - The MatDialog service for displaying error dialogs.
   */
  constructor(protected dialog: MatDialog) {}

  protected openSuccessesDialog(): void {
    this.dialog.open(PasswordRecoveryDialogComponent);
  }
  /**
   * Opens an error dialog with the provided error message.
   *
   * @param _error - The error message to display.
   */
  protected openErrorDialog(_error: string): void {
    this.dialog.open(ErrorDialogComponent, {
      data: {
        errorMessage: _error,
      },
    });
  }

  /**
   * Handles HTTP request errors and displays an appropriate error dialog.
   *
   * @param error - The HTTP error response.
   */
  protected handleError(error: HttpErrorResponse): void {
    switch (error.status) {
      case 400:
        this.openErrorDialog(error.error);
        break;

      case 0:
      case 500:
        this.openErrorDialog(
          'O servidor está temporariamente indisponível. Por favor, tente novamente mais tarde.'
        );
        break;

      default:
        this.openErrorDialog(
          'Erro Desconhecido, por favor entre em contato com o suporte'
        );
        break;
    }
  }
}
