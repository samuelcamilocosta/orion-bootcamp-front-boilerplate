import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILoginParams } from 'src/app/interfaces/login-params.interface';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiV1Service {
  private readonly apiURL = `${environment.api}/v1/login`;

  constructor(private http: HttpClient) {}

  sendData(data: ILoginParams) {
    return this.http
      .post(this.apiURL, data)
      .subscribe((res) => console.log(res));
  }
}
