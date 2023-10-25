import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiV1Service } from 'src/app/api/v1/login.service';
import { ILoginParams } from 'src/app/interfaces/login-params.interface';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  hide = true;

  constructor(private loginService: ApiV1Service) {
    console.log(environment);
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
    Validators.pattern(
      /[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/im
    ),
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(
      /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,128}$/m
    ),
  ]);
  loginFormControl = new FormGroup({
    email: this.emailFormControl,
    password: this.passwordFormControl,
  });

  onSubmit() {
    if (this.loginFormControl.valid) {
      console.log(this.loginFormControl.value);
      const data = this.loginFormControl.value as ILoginParams;

      this.loginService.sendData(data);
    }
  }

  // resetForm() {
  //   this.loginFormControl.reset();
  // }
}
