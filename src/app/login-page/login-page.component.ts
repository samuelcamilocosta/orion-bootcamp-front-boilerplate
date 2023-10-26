import { Component } from '@angular/core';
import {
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
} from '@angular/forms';

import { NgIf, JsonPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    MatCheckboxModule,
    JsonPipe,
    MatDividerModule,
  ],
})

/**
 * Login page that includes a login form.
 */
export class LoginPageComponent {
  /**
   * Variable to control password visibility
   * */
  hide = true;

  /**
   * Form group for login
   */
  formGroup: FormGroup;

  /**
   * Constructor for the LoginPageComponent class.   * 
   * @param fb A FormBuilder to create the FormGroup.
   */
  constructor(private fb: FormBuilder) {
    /**
     * Initialize the FormGroup with email and password fields along with their respective validations
     */
    this.formGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&]).{8,}$/)
        ]
      ]
    })
  }

  /**
   * 
   * Checks whether the login button should be disabled based on form validations.   * 
   * @returns True if the login button should be disabled; otherwise, returns False.
   */
    isLoginButtonDisabled(): boolean {
    return this.formGroup.invalid;
  }

}
