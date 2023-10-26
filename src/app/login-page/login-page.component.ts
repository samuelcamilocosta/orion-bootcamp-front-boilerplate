import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiV1Service } from 'src/app/api/v1/login.service';
import { ILoginParams } from 'src/app/interfaces/login-params.interface';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  hide = true;
  formGroup: FormGroup;

  constructor(private fb: FormBuilder, private loginService: ApiV1Service) {
    this.formGroup = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(
            /[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/im
          ),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&]).{8,}$/
          ),
        ],
      ],
    });
  }

  isLoginButtonDisabled(): boolean {
    return this.formGroup.invalid;
  }

  onSubmit() {
    if (this.formGroup.valid) {
      console.log(this.formGroup.value);
      const data = this.formGroup.value as ILoginParams;

      this.loginService.sendData(data);
    }
  }
}
