import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/components/error-dialog/error-dialog.component';
import { ILoginParams } from 'src/app/interfaces/login-params.interface';
import { ILoginRespParams } from 'src/app/interfaces/login-resp-params-interface';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiV1Service {
  private readonly apiURL = `${environment.api}/v1/login`;

  constructor(private http: HttpClient, private dialog: MatDialog) {}

  //method to open an error message pop-up
  openDialog(): void {
    const dialogRef = this.dialog.open(ErrorDialogComponent);

    dialogRef.afterClosed().subscribe(() => {
      console.log('Dialog closed');
    });
  }

  //method POST to send data to back-end and receive a response, if error: open a error dialog
  async sendData(data: ILoginParams): Promise<ILoginRespParams> {
    try {
      return (await this.http
        .post(this.apiURL, data)
        .toPromise()) as ILoginRespParams;
    } catch (error) {
      if (error instanceof HttpErrorResponse) {
        if (error.status === 400) {
          this.openDialog();
        } else {
          console.log('POST request failed:', error);
        }
      }
      throw new Error('An error occurred while posting data.');
    }
  }
}
