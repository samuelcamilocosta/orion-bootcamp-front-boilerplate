import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BaseMethods } from 'src/app/api/v1/base-methods';
import { LogoutService } from 'src/app/api/v1/logout.service';
import { AuthService } from '../../../services/auth/auth.service';

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
  isPremium?: boolean;
  /**
   * constructor
   *
   * @param dialog: Instance of BaseMethod class for displaying dialogs.
   * @param logoutService:  service to handle user authentication token removal and redirects him to login page
   */
  constructor(
    private logoutService: LogoutService,
    private authService: AuthService,
    dialog: MatDialog
  ) {
    super(dialog);
  }

  ngOnInit(): void {
    this.checkRole();
  }

  checkRole() {
    this.isPremium = this.authService.isPremium();
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
  openModal(): void {
    this.openPremiumModal();
  }
}
