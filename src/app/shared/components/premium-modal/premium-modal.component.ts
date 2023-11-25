import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ICard } from 'src/app/interfaces/card-params-interface';

@Component({
  selector: 'app-premium-modal',
  templateUrl: './premium-modal.component.html',
  styleUrls: ['./premium-modal.component.scss'],
})
export class PremiumModalComponent {
  isLoading = false; // Inicialmente, estamos carregando

  planCards: ICard[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: { planCards: ICard[] },
    private dialogRef: MatDialogRef<PremiumModalComponent>
  ) {
    // setTimeout(() => {
    //   this.isLoading = false; // Os dados foram carregados
    // }, 2000);
    this.planCards = data.planCards;
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
