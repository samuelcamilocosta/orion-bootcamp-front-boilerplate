import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation-modal.component',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss'],
})
export class ConfirmationModalComponent {
  /**
   * Constructs the ConfirmationModalComponent.
   *
   * @param dialogRef - The MatDialogRef used to control the dialog.
   * @param route - Router,
   * @param data - Data injected into the dialog
   */
  constructor(
    private dialogRef: MatDialogRef<ConfirmationModalComponent>,
    private route: Router,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  /**
   * Closes the password recovery dialog.
   */
  closeDialog(): void {
    this.dialogRef.close();
    this.route.navigate(['/']);
  }
}
