import { Component, Input } from '@angular/core';
import { ISolesDataInterface } from 'src/app/interfaces/soles-data-interface';
import { CardParamsMethods } from '../cards/card-params-methods';

@Component({
  selector: 'app-carousel-card',
  templateUrl: './meteorology-carousel-card.component.html',
  styleUrls: ['./meteorology-carousel-card.component.scss'],
})
export class MeteorologyCarouselCardComponent extends CardParamsMethods {
  /**
   * carouselCardParams
   *
   * Input property that receives card attributes from the parent component.
   */
  @Input() carouselCardParams?: ISolesDataInterface;

  /**
   * carTempType
   *
   * represents the temperature type as "C" (Celsius) or "F" (Fahrenheit)
   */
  @Input() carTempType?: string;
}
