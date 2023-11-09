import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RecoveryService } from 'src/app/api/v1/recovery.service';
import { IEmail } from 'src/app/interfaces/recovery-params';

@Component({
  selector: 'app-password-recovery-page',
  templateUrl: './password-recovery-page.component.html',
  styleUrls: [
    './password-recovery-page.component.scss',
    '../login-page/login-page.component.scss',
  ],
})

/**
 * Password Recovery page that includes a email form.
 */
export class PasswordRecoveryPageComponent {
  constructor(private recoveryService: RecoveryService) {}

  /**
   * A form control for capturing the user's email.
   */
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
    Validators.pattern(
      /[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/im
    ),
  ]);

  /**
   * A form group containing the email form control.
   */
  formGroup = new FormGroup({
    email: this.emailFormControl,
  });

  /**
   * Handles form submission by sending data to the email service.
   */
  async onSubmit(): Promise<void> {
    const data: IEmail = {
      email: this.formGroup.value.email!,
    };
    await this.recoveryService.sendEmail(data);
  }
}
