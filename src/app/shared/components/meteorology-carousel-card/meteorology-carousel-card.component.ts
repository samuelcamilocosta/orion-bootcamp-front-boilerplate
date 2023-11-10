import { Component, Input } from '@angular/core';
import { ICarouselCard } from 'src/app/interfaces/carousel-card-params-interface';

@Component({
  selector: 'app-carousel-card',
  templateUrl: './meteorology-carousel-card.component.html',
  styleUrls: ['./meteorology-carousel-card.component.scss'],
})
export class MeteorologyCarouselCardComponent {
  /**
   * carouselCardParams
   *
   * Input property that receives card attributes from the parent component.
   * @type {ICarouselCard}
   */
  @Input() carouselCardParams!: ICarouselCard;
}
