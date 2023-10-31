import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss'],
})
export class HomeCardComponent {
  /**
   * Input property for the card's image URL.
   * Input property for the card's title.
   * Input property for the card's subtitle.
   * Input property for the router link.
   */
  @Input() cardImage = '';

  @Input() cardTitle = '';

  @Input() cardSubTitle = '';

  @Input() routerLink = '';

  /**
   * Determines the visibility of the card based on the presence of a router link.
   * @returns 'visible' if there's no router link, 'hidden' otherwise.
   */
  showSoon(): string {
    return this.routerLink === '' ? 'visible' : 'hidden';
  }

  /**
   * Applies a CSS filter to the card image based on the presence of a router link.
   * @returns 'grayscale(1)' if there's no router link, 'none' otherwise.
   */
  filterImg(): string {
    return this.routerLink === '' ? 'grayscale(1)' : 'none';
  }

  /**
   * Checks if the card is disabled based on the presence of a router link.
   * @returns `true` if there's no router link, `false` otherwise.
   */
  isDisabled(): boolean {
    return this.routerLink === '' ? true : false;
  }
}
