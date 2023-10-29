import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-password-recovery-dialog',
  templateUrl: './password-recovery-dialog.component.html',
  styleUrls: ['./password-recovery-dialog.component.scss'],
})
export class PasswordRecoveryDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<PasswordRecoveryDialogComponent>
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
