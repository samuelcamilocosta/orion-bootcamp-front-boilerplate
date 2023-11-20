import { Component, OnInit } from '@angular/core';
import { BaseMethods } from 'src/app/api/v1/base-methods';
import { LogoutService } from 'src/app/api/v1/logout.service';

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
  /**
   * constructor
   *
   * @param logoutService:  service to handle user authentication token removal and redirects him to login page
   */
  constructor(private logoutService: LogoutService) {
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
  openModal(): void {
    this.openPremiumModal();
  }
}
