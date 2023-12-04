import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BaseMethods } from 'src/app/api/v1/base-methods';
import { LogoutService } from 'src/app/api/v1/logout.service';
import { PlanModalCardsService } from 'src/app/api/v1/plan-modal-cards.service';
import { ICard } from 'src/app/interfaces/card-params-interface';
import { AuthService } from 'src/app/services/auth/auth.service';
import { PremiumModalComponent } from '../premium-modal/premium-modal.component';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})

/**
 * LogoutComponent
 *
 * a button component that removes the user authentication and redirects him
 */
export class LogoutComponent extends BaseMethods implements OnInit {
  @Output() dataToSend = new EventEmitter<any>();

  planCards: ICard[] = [];

  /**
   * constructor
   *
   * @param logoutService:  service to handle user authentication token removal and redirects him to login page
   * @param authService:  service to handle user authentication (token and role)
   */

  constructor(
    private logoutService: LogoutService,
    private authService: AuthService,
    private planModalCardsService: PlanModalCardsService
  ) {
    super();
  }

  /**
   * initializes checkRole method on page init
   */
  ngOnInit(): void {
    this.checkRole();
  }

  /**
   * checkRole
   *
   * checks user role as "Premium" or not
   *
   * @returns 'true' if is "Premium", false otherwise
   */
  checkRole() {
    return this.authService.isPremium();
  }

  /**
   * logout
   *
   * Logs user out by removing access token from local/session storage and api
   * and redirects him to login page.
   */
  logout(): void {
    this.logoutService.removeAuth();
  }

  /**
   * openModal
   *
   * opens the premium modal when "SEJA PREMIUM" button is clicked
   */

  protected openPremiumModal(): void {
    console.log('modal aberto');
    this.planModalCardsService.getPlanCardsData().then((data) => {
      this.dataToSend.emit(data as ICard[]);

      this.dialog.open(PremiumModalComponent, {
        panelClass: 'app-premium-modal-radius',
        data: { planCards: data },
      });
    });
  }
}
