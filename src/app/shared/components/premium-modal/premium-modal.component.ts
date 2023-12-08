import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ICard } from 'src/app/interfaces/card-params-interface';

@Component({
  selector: 'app-premium-modal',
  templateUrl: './premium-modal.component.html',
  styleUrls: ['./premium-modal.component.scss'],
})
export class PremiumModalComponent {
  /**
   * isLoading: represents the loading spinner. It starts true an change to false when planCards exists
   */
  isLoading = true;

  /**
   * planCards: represents an array of @type {ICard}
   */
  planCards: ICard[] = [];

  /**
   * constructor
   *
   * @param data - The injected data, containing an array of plan cards of @type {ICard}.
   * @param dialogRef - Reference to the MatDialog for the component.
   */
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: { planCards: ICard[] },
    private dialogRef: MatDialogRef<PremiumModalComponent>
  ) {
    if (data.planCards) {
      this.isLoading = false;

      this.planCards = data.planCards;
    }
  }

  /**
   * premiumStyleActive
   *
   * apply "the card-content-premium" class on home-cards component to reuse it
   */
  premiumStyleActive = true;

  /**
   * closeDialog
   *
   * closes the PremiumModalComponent dialog
   */
  closeDialog(): void {
    this.dialogRef.close();
  }
}
