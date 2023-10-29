import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PasswordRecoveryDialogComponent } from 'src/app/shared/components/password-recovery-dialog/password-recovery-dialog.component';

@Component({
  selector: 'app-password-recovery-page',
  templateUrl: './password-recovery-page.component.html',
  styleUrls: [
    './password-recovery-page.component.scss',
    '../login-page/login-page.component.scss',
  ],
})
export class PasswordRecoveryPageComponent {
  constructor(private dialog: MatDialog) {}

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
    Validators.pattern(
      /[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/im
    ),
  ]);

  formGroup = new FormGroup({
    email: this.emailFormControl,
  });

  openDialog(): void {
    const dialogRef = this.dialog.open(PasswordRecoveryDialogComponent);

    dialogRef.afterClosed().subscribe(() => {
      console.log('Dialog closed');
    });
  }
  onSubmit() {
    console.log(this.emailFormControl.value);
    this.openDialog();
  }
}
