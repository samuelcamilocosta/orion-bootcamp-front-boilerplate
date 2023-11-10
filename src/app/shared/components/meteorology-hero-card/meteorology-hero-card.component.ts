import { Component, Input } from '@angular/core';
import { IHeroCardInterface } from 'src/app/interfaces/ihero-card-interface';

@Component({
  selector: 'app-hero-card',
  templateUrl: './meteorology-hero-card.component.html',
  styleUrls: ['./meteorology-hero-card.component.scss'],
})
export class MeteorologyHeroCardComponent {
  @Input() heroCardParams!: IHeroCardInterface;
}
