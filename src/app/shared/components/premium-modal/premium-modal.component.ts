import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PlanModalCardsService } from 'src/app/api/v1/plan-modal-cards.service';
import { ICard } from 'src/app/interfaces/card-params-interface';

@Component({
  selector: 'app-premium-modal',
  templateUrl: './premium-modal.component.html',
  styleUrls: ['./premium-modal.component.scss'],
})
export class PremiumModalComponent implements OnInit {
  planCards: ICard[] = [];

  /**
   * premiumStyleActive
   *
   * apply "the card-content-premium" class on home-cards component to reuse it
   */
  premiumStyleActive = true;

  constructor(
    private planModalCardsService: PlanModalCardsService,
    private dialogRef: MatDialogRef<PremiumModalComponent>
  ) {}

  /**
   * closeDialog
   *
   * closes the PremiumModalComponent dialog
   */
  closeDialog(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.loadData();
  }

  async loadData() {
    this.planCards = await this.planModalCardsService.getPlanCardsData();
  }
}
