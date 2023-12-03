import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/api/v1/login.service';
import { IFormParams } from 'src/app/interfaces/login-form-params';
import { ILoginParams } from 'src/app/interfaces/login-params.interface';
import { UserConfirmationService } from '../../api/v1/user-confirmation.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})

/**
 * Login page that includes a login form.
 */
export class LoginPageComponent implements OnInit {
  /**
   * Controls whether the password input is hidden or shown.
   */
  hide = true;

  /**
   * Form group for login
   */
  formGroup: FormGroup;

  /**
   * Constructor *
   * @param fb - An instance of FormBuilder for form creation.
   * @param loginService - An instance of the LoginService that handles login http request.
   * @param auth - An instance of the AuthService for authentication.
   * @param route - An instance of the Router for navigation.
   */
  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private auth: AuthService,
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private userConfirmationService: UserConfirmationService
  ) {
    // Initialize the formGroup with email, password, and checkbox fields.
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

  /**
   * Checks whether the login button should be disabled based on form validations.
   * @returns True if the login button should be disabled; otherwise, returns False.
   */
  isLoginButtonDisabled(): boolean {
    return this.formGroup.invalid;
  }

  /**
   * Handles form submission by sending data to the login service.
   */
  async onSubmit() {
    const formData: IFormParams = this.formGroup.value;
    const dataToSend: ILoginParams = {
      email: formData.email,
      password: formData.password,
    };
    const checkbox: boolean = formData.checkbox;

    await this.loginService.sendData(dataToSend, checkbox);
  }

  /**
   * Initializes the component. If the user is already authenticated, it navigates to the home page.
   */
  ngOnInit(): void {
    if (this.auth.isAuthenticated()) {
      this.route.navigate(['/page/home']);
    }

    const confirmationToken: string =
      this.activatedRoute.snapshot.queryParams['confirmationToken'];

    if (confirmationToken !== undefined) {
      this.userConfirmationService.confirmUser({ confirmationToken });
    }
  }
}
