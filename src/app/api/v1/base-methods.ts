import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpMethod } from 'src/app/enum/http-method.enum';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { PasswordRecoveryDialogComponent } from 'src/app/shared/components/password-recovery-dialog/password-recovery-dialog.component';
import { PremiumModalComponent } from 'src/app/shared/components/premium-modal/premium-modal.component';
import { TransitionModalComponent } from 'src/app/shared/components/transition-modal/transition-modal.component';
import { environment } from 'src/environment/environment';

export class BaseMethods {
  /**
   * apiUrl: represents the base API path
   */
  private readonly apiUrl = environment.api;

  /**
   * dialog:  Injected instance of MatDialog for displaying dialogs.
   */
  dialog = inject(MatDialog);

  /**
   * http: Injected instance of HttpClient for making HTTP requests.
   */
  http = inject(HttpClient);

  /**
   * authService: Injected instance of AuthService for handling authentication.
   */
  authService = inject(AuthService);

  /**
   * getHeaders
   *
   * method to handle api authorization API requests
   *
   * @returns an instance of HttpHeaders with Authorization Bearer Token
   */
  private getHeaders(): HttpHeaders {
    const token = this.authService.getUserToken();

    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }

  /**
   * getFullUrl
   *
   * method to get dynamic complete endpoints path
   *
   * @param endpoint: endpoint parameter to be added to the base path
   * @returns a complete path to the endpoint given
   */
  private getFullUrl(endpoint: string): string {
    return `${this.apiUrl}/${endpoint}`;
  }

  /**
   * HttpRequest
   *
   * generic method to handle various http requests.
   *
   * @param method Represents the HTTP method to be used (GET,POST,PUT,PATCH,DELETE) as an enum HttpMethod
   * @param endpoint String of the endpoint to apply the methods
   * @param body - The request body (if applicable).
   * @param params - The query parameters for the request (if applicable).
   *
   * @returns A Promise that resolves with the result of the HTTP request.
   */
  protected HttpRequest<T>(
    method: HttpMethod,
    endpoint: string,
    body?: any,
    params?: HttpParams
  ) {
    const url = this.getFullUrl(endpoint);

    const headers = this.getHeaders();

    switch (method) {
      case HttpMethod.GET:
        return this.http.get<T>(url, { headers, params }).toPromise();
      // }
      case HttpMethod.POST:
        return this.http.post<T>(url, body, { headers }).toPromise();
      // }
      case HttpMethod.PUT:
        return this.http.put<T>(url, body, { headers }).toPromise();
      // }
      case HttpMethod.PATCH:
        return this.http.patch<T>(url, body, { headers }).toPromise();
      // }
      case HttpMethod.DELETE:
        return this.http.delete<T>(url, { headers }).toPromise();
      // }
      default:
        throw new Error('Invalid HTTP method');
    }
  }

  /**
   * openTransitionModal
   *
   * Opens a 100% viewport transition modal after login authentication
   */
  protected openTransitionModal(): void {
    this.dialog.open(TransitionModalComponent, {
      delayFocusTrap: false,
      disableClose: true,
      enterAnimationDuration: 0,
      hasBackdrop: false,
    });
  }

  /**
   * openPremiumModal
   *
   * Opens a modal centered in viewport with information about the Premium user
   */
  protected openPremiumModal(): void {
    this.dialog.open(PremiumModalComponent, {
      maxWidth: '100%',
      panelClass: 'app-premium-modal-radius',
    });
  }

  /**
   * openSuccessesDialog
   *
   * opens a successes dialog after submit email on recovery page
   * for better user experience.
   */
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

      case 401:
        this.openErrorDialog(
          'Não autorizado. Credenciais de autenticação ausentes ou incorretas.'
        );
        break;

      case 403:
        this.openErrorDialog(
          'Proibido. A solicitação foi entendida, mas a autorização foi recusada.'
        );
        break;

      case 404:
        this.openErrorDialog('Recurso não encontrado.');
        break;

      case 409:
        this.openErrorDialog(
          'Conflito. A solicitação não pôde ser concluída devido a um conflito no estado do recurso.'
        );
        break;

      case 422:
        this.openErrorDialog(
          'Entidade não processável. O servidor não pôde processar as instruções contidas na solicitação.'
        );
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
