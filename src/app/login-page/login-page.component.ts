import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiV1Service } from 'src/app/api/v1/login.service';
import { ILoginParams } from 'src/app/interfaces/login-params.interface';
import { ILoginRespParams } from '../interfaces/login-resp-params-interface';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  hide = true;
  formGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: ApiV1Service,
    private auth: AuthService,
    private route: Router
  ) {
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
      checkbox: [false],
    });
  }

  isLoginButtonDisabled(): boolean {
    return this.formGroup.invalid;
  }

  async onSubmit() {
    const data = this.formGroup.value as ILoginParams;
    const response = (await this.loginService.sendData(
      data
    )) as ILoginRespParams;

    if (this.formGroup.get('checkbox')?.value) {
      this.auth.setLocalItem('token', response);
    } else {
      this.auth.setSessionItem('token', response);
    }

    if (this.auth.isAuthenticated()) {
      this.route.navigate(['/test']);
    }
  }

  ngOnInit(): void {
    //just as placeholder
    console.log(this.formGroup.value);

    // check if user is authenticated or not and redirect to another page
    // if (this.auth.isAuthenticated()) {
    //   this.route.navigate(['/test']);
    // }
  }
}
