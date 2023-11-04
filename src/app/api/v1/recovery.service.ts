import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiV1Service } from 'src/app/api/v1/login.service';
import { PasswordRecoveryDialogComponent } from 'src/app/shared/components/password-recovery-dialog/password-recovery-dialog.component';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class RecoveryService {
  private readonly apiURL: string;

  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private route: Router,
    private apiV1Service: ApiV1Service
  ) {
    this.apiURL = `${environment.api}/v1/recovery`;
  }

  openDialog(): void {
    this.dialog.open(PasswordRecoveryDialogComponent);
  }

  async sendData(email: object): Promise<object> {
    return new Promise<object>((resolve, reject) => {
      const request = this.http.post<object>(this.apiURL, email).toPromise();

      request
        .then((response) => {
          if (response) {
            this.route.navigate(['/']);
            setTimeout(() => {
              this.openDialog();
            }, 500);

            resolve(response);
          } else {
            reject(
              this.apiV1Service.openErrorDialog(
                'Ocorreu algum erro de conexão ou erro interno, resposta recebida como vazia'
              )
            );
          }
        })
        .catch((error: HttpErrorResponse) => {
          console.log(error.status);
          if (error.status === 400 || error.status === 200) {
            this.route.navigate(['/']);
            setTimeout(() => {
              this.openDialog();
            }, 500);
          } else {
            this.apiV1Service.handleError(error);
          }

          reject(error);
        });
    });
  }
}
