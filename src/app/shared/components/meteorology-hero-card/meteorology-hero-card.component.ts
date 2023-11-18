import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IHeroCard } from 'src/app/interfaces/hero-card-params-interface';
import { CardParamsMethods } from '../cards/card-params-methods';

@Component({
  selector: 'app-hero-card',
  templateUrl: './meteorology-hero-card.component.html',
  styleUrls: ['./meteorology-hero-card.component.scss'],
})
export class MeteorologyHeroCardComponent extends CardParamsMethods {
  /**
   * heroCardParams
   *
   * Input property that receives card attributes from the parent component.
   */
  @Input() heroCardParams?: IHeroCard;

  /**
   * spanClick
   *
   * Emits the 'spanClick' event to notify parent components.
   */
  @Output() spanClick: EventEmitter<any> = new EventEmitter();

  /**
   * changeType
   *
   * method that receives the event that will notify the parent component (MeteorologyPageComponent)
   */
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

  /**
   * getTempType
   *
   * method to get tempType param
   *
   * @returns tempType as ('C | F' | 'F | C') or ('C | F') as default
   */
  protected getTempType(): string {
    return this.heroCardParams?.tempType ?? 'C | F';
  }

  /**
   * getMaxIndicator
   *
   * method to the get maxIndicator as ITempIndicator {up : boolean, down : boolean, equal : boolean}
   *
   * @returns maxIndicator with one of the keys as true and the others as false
   */
  protected getMaxIndicator() {
    return this.heroCardParams?.maxIndicator;
  }

  /**
   * getMinIndicator
   *
   * method to the get minIndicator as ITempIndicator {up : boolean, down : boolean, equal : boolean}
   *
   * @returns minIndicator with one of the keys as true and the others as false
   */
  protected getMinIndicator() {
    return this.heroCardParams?.minIndicator;
  }
}
