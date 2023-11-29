import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss'],
})
export class SignUpPageComponent {
  /**
   * hide/hideConfirmPassword: Controls whether the password input is hidden or shown.
   */
  hide = true;
  hideConfirmPassword = true;

  /**
   * Form group for sign up page
   */
  signUpFormGroup: FormGroup;

  /**
   * Constructor
   *
   * @param fb - An instance of FormBuilder for form creation.
   */
  constructor(private fb: FormBuilder) {
    // Initialize the formGroup with email, password, and checkbox fields.
    this.signUpFormGroup = this.fb.group(
      {
        name: ['', [Validators.required]],
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
        confirmPassword: ['', [Validators.required]],
        checkbox: ['', [Validators.requiredTrue]],
      },
      { validator: this.passwordMatchValidator }
    );
  }

  /**
   * Handles form submission by sending data to the login service.
   */
  async onSubmit() {
    const formData = this.signUpFormGroup.value;
    const dataToSend = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };

    // await this.signupService.sendData(dataToSend);
  }

  /**
   * passwordMatchValidator
   *
   * custom validator to check if password and confirmPassword are identical
   *
   * @param control The form group to validate.
   * @returns A validation error object if the passwords don't match, otherwise null.
   */
  passwordMatchValidator: ValidatorFn = (
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
   * method to apply display style 'none' or 'flex' based on condition met
   * @returns 'none' if true, 'flex' otherwise
   */
  showCheck(): string {
    return this.signUpFormGroup.get('password')?.value.length === 0
      ? 'none'
      : 'flex';
  }

  /**
   * lengthCheck
   *
   * method to dynamically apply class based on condition
   * @returns 'validPassword' if true, 'invalidPassword' otherwise
   */
  lengthCheck(): string | undefined {
    const passwordLength = this.signUpFormGroup.get('password')?.value.length;

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
  checkPattern(regex: RegExp): string | undefined {
    const passwordValue = this.signUpFormGroup.get('password')?.value;

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
    const passwordLength = this.signUpFormGroup.get('password')?.value.length;

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
