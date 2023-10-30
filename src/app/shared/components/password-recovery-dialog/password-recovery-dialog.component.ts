import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-password-recovery-dialog',
  templateUrl: './password-recovery-dialog.component.html',
  styleUrls: ['./password-recovery-dialog.component.scss'],
})
export class PasswordRecoveryDialogComponent {
  /**
   * Constructs the PasswordRecoveryDialogComponent.
   *
   * @param dialogRef - The MatDialogRef used to control the dialog.
   */
  constructor(
    private dialogRef: MatDialogRef<PasswordRecoveryDialogComponent>
  ) {}

  /**
   * Closes the password recovery dialog.
   */
  closeDialog(): void {
    this.dialogRef.close();
  }
}
