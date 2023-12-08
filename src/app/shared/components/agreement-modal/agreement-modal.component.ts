import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-agreement-modal',
  templateUrl: './agreement-modal.component.html',
  styleUrls: ['./agreement-modal.component.scss'],
})
export class AgreementModalComponent {
  constructor(private dialog: MatDialog) {}

  closeDialog() {
    this.dialog.closeAll();
  }
}
