import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ILoginParams } from 'src/app/interfaces/login-params.interface';
import { ILoginRespParams } from 'src/app/interfaces/login-resp-params-interface';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})

/**
 * Service for handling API requests with the v1 endpoint.
 */
export class ApiV1Service {
  private readonly apiURL: string;

  /**
   * Constructs the ApiV1Service.
   *
   * @param http - The HttpClient service for making HTTP requests.
   * @param dialog - The MatDialog service for displaying error dialogs.
   * @param auth - The authentication service.
   * @param route - The Router service for navigation.
   */
  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private auth: AuthService,
    private route: Router
  ) {
    this.apiURL = `${environment.api}/v1/login`;
  }

  /**
   * Opens an error dialog with the provided error message.
   *
   * @param _error - The error message to display.
   */
  public openErrorDialog(_error: string): void {
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
  public handleError(error: HttpErrorResponse): void {
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

  /**
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
            remember
              ? this.auth.setLocalItem('token', response)
              : this.auth.setSessionItem('token', response);

            this.route.navigate(['/home']);

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
