import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
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

  /**
   * constructor
   *
   * @param authService: service responsible for verifying user authentication through local/session storage user data.
   * @param planModalCardsService: service that handles HTTP GET request on PremiumModalComponent.
   * @param dialog: Injected instance of MatDialog for displaying dialogs.
   */

  constructor(
    private authService: AuthService,
    private planModalCardsService: PlanModalCardsService,
    private dialog: MatDialog,
    private route: Router
  ) {}

  /**
   * showSoon
   *
   * Determines the visibility of the card based on the presence of a router link path.
   *
   * @returns 'visible' if there's a empty path, 'hidden' otherwise.
   */
  showSoon(): string {
    return this.isDisabled() ? 'visible' : 'hidden';
  }

  /**
   * isNews
   *
   * checks the existence of path '/page/mars-map'
   *
   * @returns true if exists, false otherwise
   */
  isNews() {
    return this.cardAttributes?.cardPath === '/page/mars-map';
  }

  /**
   * filterImg
   *
   * Applies a CSS filter to the card image if card button is disabled.
   *
   * @returns 'grayscale(1)' if `true`, 'none' otherwise.
   */
  filterImg(): string {
    return this.isDisabled() ? 'grayscale(1)' : 'none';
  }

  /**
   * isDisabled
   *
   * Checks if the card is disabled based on paths in routing module.
   *
   * @returns `false` if path matches, `true` otherwise.
   */
  isDisabled(): boolean {
    const route = this.route.config.find(
      (route) =>
        route.path && this.cardAttributes?.cardPath.includes(route.path)
    );

    if (
      this.cardAttributes?.cardPath === '/page/mars-map' &&
      this.authService.isPremium()
    ) {
      return false;
    }

    return !route;
  }

  /**
   * checkRole
   *
   * checks user role and the components path
   *
   * @returns true if condition is met, false otherwise
   */
  checkRole(): boolean {
    return (
      !this.authService.isPremium() &&
      this.cardAttributes?.cardPath === '/page/mars-map'
    );
  }

  @Output() dataToSend = new EventEmitter<any>();

  /**
   * openPremiumModal
   *
   * opens the premium modal when "SEJA PREMIUM" button is clicked
   */
  protected openPremiumModal(): void {
    this.planModalCardsService.getPlanCardsData().then((data) => {
      this.dataToSend.emit(data as ICard[]);

      this.dialog.open(PremiumModalComponent, {
        panelClass: 'app-premium-modal-radius',
        data: { planCards: data },
      });
    });
  }

  /**
   * Closes the premium modal.
   */
  closeDialog(): void {
    this.dialog.closeAll();
  }
}
