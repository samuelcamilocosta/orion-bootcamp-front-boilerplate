import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RecoveryModalComponent } from 'src/app/components/login/recovery-modal/recovery-modal.component';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: [
    './password-recovery.component.scss',
    '../login/login.component.scss',
  ],
})
export class PasswordRecoveryComponent {
  hide = true;

  constructor(private dialog: MatDialog) {}

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
    Validators.pattern(
      /[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/im
    ),
  ]);

  openDialog(): void {
    const dialogRef = this.dialog.open(RecoveryModalComponent);

    dialogRef.afterClosed().subscribe(() => {
      console.log('Dialog closed');
    });
  }
  onSubmit() {
    console.log(this.emailFormControl.value);
    this.openDialog();
  }
}
