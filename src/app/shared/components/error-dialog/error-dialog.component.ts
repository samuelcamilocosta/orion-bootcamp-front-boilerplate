import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.scss'],
})
/**
 * Represents a dialog component for displaying error messages.
 */
export class ErrorDialogComponent {
  /**
   * The error message to display in the dialog.
   */
  errorMessage: string;

  /**
   * Constructs the ErrorDialogComponent.
   *
   * @param data - Data injected into the dialog, including the error message.
   * @param dialogRef - The MatDialogRef used to control the dialog.
   */
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ErrorDialogComponent>
  ) {
    this.errorMessage = data.errorMessage;
  }

  /**
   * Closes the error dialog.
   */
  closeDialog(): void {
    this.dialogRef.close();
  }
}
