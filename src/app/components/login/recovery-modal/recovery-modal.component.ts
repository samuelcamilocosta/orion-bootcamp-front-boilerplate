import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-recovery-modal',
  templateUrl: './recovery-modal.component.html',
  styleUrls: ['./recovery-modal.component.scss'],
})
export class RecoveryModalComponent {
  constructor(private dialogRef: MatDialogRef<RecoveryModalComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    console.log('Submitted');
  }
}
