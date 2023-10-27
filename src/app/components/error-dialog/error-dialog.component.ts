import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.scss'],
})
export class ErrorDialogComponent {
  constructor(private dialogRef: MatDialogRef<ErrorDialogComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
