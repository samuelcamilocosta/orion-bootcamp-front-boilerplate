import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-privacy-policy-modal',
  templateUrl: './privacy-policy-modal.component.html',
  styleUrls: ['./privacy-policy-modal.component.scss'],
})
export class PrivacyPolicyModalComponent {
  constructor(private dialog: MatDialog) {}

  closeDialog() {
    this.dialog.closeAll();
  }
}
