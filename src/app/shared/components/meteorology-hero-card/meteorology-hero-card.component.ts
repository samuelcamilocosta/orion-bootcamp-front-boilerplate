import { Component, Input } from '@angular/core';
import { IHeroCardInterface } from 'src/app/interfaces/ihero-card-interface';
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
   * @type {IHeroCardInterface}
   */
  @Input() heroCardParams!: ISolesDataInterface;
}
