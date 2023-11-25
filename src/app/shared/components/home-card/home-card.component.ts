import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PlanModalCardsService } from 'src/app/api/v1/plan-modal-cards.service';
import { ICard } from 'src/app/interfaces/card-params-interface';
import { AuthService } from 'src/app/services/auth/auth.service';
import { PremiumModalComponent } from '../premium-modal/premium-modal.component';

@Component({
  selector: 'app-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss'],
})
/**
 * Component Card for home page
 */
export class HomeCardComponent {
  /**
   * Input property that receives card attributes from the parent component.
   * @type {ICard}
   */
  @Input() cardAttributes?: ICard;

  /**
   * Input property that applies the class "card-content-premium" when needed on parent component
   */
  @Input() premiumStyle = false;

  constructor(
    private authService: AuthService,
    private planModalCardsService: PlanModalCardsService,
    private dialog: MatDialog
  ) {}

  /**
   * Determines the visibility of the card based on the presence of a router link path.
   * @returns 'visible' if there's a empty path, 'hidden' otherwise.
   */
  showSoon(): string {
    return this.cardAttributes?.path === '' ? 'visible' : 'hidden';
  }

  showNews() {
    return this.cardAttributes?.path === '/page/mars-map'
      ? 'visible'
      : 'hidden';
  }

  isNews() {
    return this.cardAttributes?.path === '/page/mars-map';
  }

  /**
   * Applies a CSS filter to the card image based on the presence of a router link path.
   * @returns 'grayscale(1)' if there's a empty path, 'none' otherwise.
   */
  filterImg(): string {
    return this.cardAttributes?.path === '' ? 'grayscale(1)' : 'none';
  }

  /**
   * Checks if the card is disabled based on the presence of a router link path.
   * @returns `true` if there's  a empty path, `false` otherwise.
   */
  isDisabled(): boolean {
    return this.cardAttributes?.path === '' ? true : false;
  }

  checkRole() {
    return (
      !this.authService.isPremium() &&
      this.cardAttributes?.path === '/page/mars-map'
    );
  }
  @Output() dataToSend = new EventEmitter<any>();

  protected openPremiumModal(): void {
    this.planModalCardsService.getPlanCardsData().then((data) => {
      this.dataToSend.emit(data as ICard[]);

      this.dialog.open(PremiumModalComponent, {
        panelClass: 'app-premium-modal-radius',
        data: { planCards: data },
      });
    });
  }
}
