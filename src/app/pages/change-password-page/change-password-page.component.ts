import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ChangePasswordService } from 'src/app/api/v1/change-password.service';

@Component({
  selector: 'app-change-password-page',
  templateUrl: './change-password-page.component.html',
  styleUrls: ['./change-password-page.component.scss'],
})
export class ChangePasswordPageComponent {
  /**
   * hide/hideConfirmPassword: Controls whether the password input is hidden or shown.
   */
  hide = true;
  hideConfirmPassword = true;

  /**
   * Form group for sign up page
   */
  changePasswordForm: FormGroup;

  /**
   * Constructor
   *
   * @param fb - An instance of FormBuilder for form creation.
   */
  constructor(
    private fb: FormBuilder,
    private changePasswordService: ChangePasswordService
  ) {
    // Initialize the changePasswordForm with password and confirmPassword
    this.changePasswordForm = this.fb.group(
      {
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(
              /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&]).{8,}$/
            ),
          ],
        ],
        confirmPassword: ['', [Validators.required]],
      },
      { validator: this.passwordMatchValidator }
    );
  }

  /**
   * Handles form submission by sending a new password to the user database.
   */
  async onSubmit() {
    const password = this.changePasswordForm.get('password');

    await this.changePasswordService.changePassword();
  }

  /**
   * passwordMatchValidator
   *
   * custom validator to check if password and confirmPassword are identical
   *
   * @param control The form group to validate.
   * @returns A validation error object if the passwords don't match, otherwise null.
   */
  private passwordMatchValidator: ValidatorFn = (
    control: AbstractControl
  ): { [key: string]: boolean } | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (password?.value.length > 0 || confirmPassword?.value.length > 0) {
      if (
        password &&
        confirmPassword &&
        password.value !== confirmPassword.value
      ) {
        confirmPassword.setErrors({ passwordMismatch: true });
        return { passwordMismatch: true };
      } else {
        confirmPassword?.setErrors(null);
        return null;
      }
    }
    return null;
  };

  /**
   * showCheck
   *
   * method to apply visibility style based on condition met
   * @returns 'hidden' if true, 'visible' otherwise
   */
  showCheck() {
    return this.changePasswordForm.get('password')?.value.length === 0
      ? 'hidden'
      : 'visible';
  }

  /**
   * lengthCheck
   *
   * method to dynamically apply class based on condition
   * @returns 'validPassword' if true, 'invalidPassword' otherwise
   */
  lengthCheck(): string | undefined {
    const passwordLength =
      this.changePasswordForm.get('password')?.value.length;

    if (passwordLength === 0) {
      return undefined;
    } else {
      return passwordLength >= 8 ? 'validPassword' : 'invalidPassword';
    }
  }

  /**
   * checkPattern
   *
   * method to handle regex tests
   *
   * @param regex parameter @type {RegExp} to be received
   * @returns 'validPassword' if true, 'invalidPassword' otherwise
   */
  private checkPattern(regex: RegExp): string | undefined {
    const passwordValue = this.changePasswordForm.get('password')?.value;

    if (passwordValue.length > 0) {
      return regex.test(passwordValue) ? 'validPassword' : 'invalidPassword';
    }
    return undefined;
  }

  /**
   * lengthCheck
   *
   * method to dynamically apply class based on condition
   * @returns 'validPassword' if true, 'invalidPassword' otherwise
   */
  letterCheck(): string | undefined {
    const passwordLength =
      this.changePasswordForm.get('password')?.value.length;

    if (passwordLength > 0) {
      const hasUpperCase = this.checkPattern(/[A-Z]/) === 'validPassword';
      const hasLowerCase = this.checkPattern(/[a-z]/) === 'validPassword';

      return hasUpperCase && hasLowerCase ? 'validPassword' : 'invalidPassword';
    }
    return undefined;
  }

  /**
   * numberCheck
   *
   * method to dynamically apply class based on condition
   * @returns 'validPassword' if true, 'invalidPassword' otherwise
   */
  numberCheck(): string | undefined {
    return this.checkPattern(/\d/);
  }

  /**
   * specialCharacterCheck
   *
   * method to dynamically apply class based on condition
   * @returns 'validPassword' if true, 'invalidPassword' otherwise
   */
  specialCharacterCheck(): string | undefined {
    return this.checkPattern(/[!@#$%&]/);
  }
}
