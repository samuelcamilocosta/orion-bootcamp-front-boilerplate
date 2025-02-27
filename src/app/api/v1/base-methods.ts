import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpMethod } from 'src/app/enum/http-method.enum';
import { ConfirmationModalParams } from 'src/app/interfaces/confirmation-modal-params';
import { StorageService } from 'src/app/services/storage/storage.service';
import { AgreementModalComponent } from 'src/app/shared/components/agreement-modal/agreement-modal.component';
import { ConfirmationModalComponent } from 'src/app/shared/components/confirmation-modal/confirmation-modal.component';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { PrivacyPolicyModalComponent } from 'src/app/shared/components/privacy-policy-modal/privacy-policy-modal.component';
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
   * storageService: Injected instance of StorageService for handling local/session stored data.
   */
  storageService = inject(StorageService);

  /**
   * route: Injected instance of Router.
   */
  route = inject(Router);

  /**
   * getHeaders
   *
   * method to handle api authorization API requests
   *
   * @returns an instance of HttpHeaders with Authorization Bearer Token
   */
  private getHeaders(): HttpHeaders {
    const token = this.storageService.getUserToken();

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
   *
   * @returns A Promise that resolves with the result of the HTTP request.
   */
  HttpRequest<T>(
    method: HttpMethod,
    endpoint: string,
    body?: any,
    params?: HttpParams
  ) {
    const url = this.getFullUrl(endpoint);

    const headers = this.getHeaders();

    switch (method) {
      case HttpMethod.GET:
        return this.http
          .get<T>(url, { headers, params, observe: 'response' })
          .toPromise();

      case HttpMethod.POST:
        return this.http
          .post<T>(url, body, { headers, observe: 'response' })
          .toPromise();

      case HttpMethod.PUT:
        return this.http
          .put<T>(url, body, { headers, observe: 'response' })
          .toPromise();

      case HttpMethod.PATCH:
        return this.http
          .patch<T>(url, body, { headers, observe: 'response' })
          .toPromise();

      case HttpMethod.DELETE:
        return this.http
          .delete<T>(url, { headers, observe: 'response' })
          .toPromise();

      default:
        throw new Error('Invalid HTTP method');
    }
  }

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
   * openSuccessesDialog
   *
   * opens a successes dialog for better user experience.
   */
  protected openSuccessesDialog(params: ConfirmationModalParams): void {
    this.dialog.open(ConfirmationModalComponent, { data: params });
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
      disableClose: true,
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
        this.openErrorDialog(error.error.error ?? error.error.message);
        break;

      case 401:
        this.openErrorDialog(
          'Não autorizado. Credenciais de autenticação ausentes ou incorretas.'
        );

        this.storageService.removeItem('user');

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
