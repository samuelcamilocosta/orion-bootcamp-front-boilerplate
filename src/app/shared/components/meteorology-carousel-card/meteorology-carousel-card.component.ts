import { Component, Input } from '@angular/core';
import { ISolesDataInterface } from 'src/app/interfaces/soles-data-interface';

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
   */
  @Input() carouselCardParams?: ISolesDataInterface;
  @Input() carTempType?: string;
}
