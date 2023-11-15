import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITempIndicator } from 'src/app/interfaces/itemp-indicator';
import { ISolesDataInterface } from 'src/app/interfaces/soles-data-interface';

@Component({
  selector: 'app-hero-card',
  templateUrl: './meteorology-hero-card.component.html',
  styleUrls: ['./meteorology-hero-card.component.scss'],
})
export class MeteorologyHeroCardComponent {
  /**
   * heroCardParams
   *
   * Input property that receives card attributes from the parent component.
   * @type {ISolesDataInterface}
   */

  @Input() heroCardParams?: ISolesDataInterface;

  @Input() maxIndicator?: ITempIndicator;

  @Input() minIndicator?: ITempIndicator;

  @Input() tempType?: string;

  heroDateFormat: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  @Output() spanClick: EventEmitter<any> = new EventEmitter();

  changeType() {
    this.spanClick.emit();
  }

  /**
   * isLoading
   *
   * verify the existence of heroCardParams and apply a class
   *
   * @returns "hero-card-params-div" class if "true", "loading-container" otherwise
   */
  isLoading() {
    return this.heroCardParams ? 'hero-card-params-div' : 'loading-container';
  }
}
