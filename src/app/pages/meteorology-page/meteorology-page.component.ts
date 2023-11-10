import { Component } from '@angular/core';
import { ICarouselCard } from 'src/app/interfaces/carousel-card-params-interface';
import { register } from 'swiper/element/bundle';

register();
@Component({
  selector: 'app-meteorology-page',
  templateUrl: './meteorology-page.component.html',
  styleUrls: ['./meteorology-page.component.scss'],
})

/**
 * MeteorologyPageComponent
 *
 * meteorology page that includes data from mars weather.
 */
export class MeteorologyPageComponent {
  /**
   * newParams
   *
   * represents the hero card params
   */
  newParams: ICarouselCard;

  /**
   * Constructor
   *
   * initializes the hero card params
   */
  constructor() {
    this.newParams = this.cards[0];
  }

  /**
   * updateHeroCard
   *
   * updates the hero card params with clicked carousel card params
   *
   * @param i index of the carousel card
   */
  updateHeroCard(i: number): void {
    this.newParams = this.cards[i];
  }

  /**
   * cards
   *
   * array of card params for carousel.
   */
  cards: ICarouselCard[] = [
    {
      solesDate: 'SOL 259',
      earthDate: '23 Setembro de 2023',
      maxTemp: -15,
      minTemp: -147,
    },
    {
      solesDate: 'SOL 260',
      earthDate: '24 Setembro de 2023',
      maxTemp: -25,
      minTemp: -107,
    },
    {
      solesDate: 'SOL 261',
      earthDate: '23 Setembro de 2023',
      maxTemp: -15,
      minTemp: -147,
    },
    {
      solesDate: 'SOL 262',
      earthDate: '23 Setembro de 2023',
      maxTemp: -15,
      minTemp: -147,
    },
    {
      solesDate: 'SOL 263',
      earthDate: '23 Setembro de 2023',
      maxTemp: -15,
      minTemp: -147,
    },
    {
      solesDate: 'SOL 264',
      earthDate: '23 Setembro de 2023',
      maxTemp: -15,
      minTemp: -147,
    },
    {
      solesDate: 'SOL 265',
      earthDate: '23 Setembro de 2023',
      maxTemp: -15,
      minTemp: -147,
    },
    {
      solesDate: 'SOL 266',
      earthDate: '23 Setembro de 2023',
      maxTemp: -15,
      minTemp: -147,
    },
    {
      solesDate: 'SOL 267',
      earthDate: '23 Setembro de 2023',
      maxTemp: -15,
      minTemp: -147,
    },
    {
      solesDate: 'SOL 268',
      earthDate: '23 Setembro de 2023',
      maxTemp: -15,
      minTemp: -147,
    },
    {
      solesDate: 'SOL 269',
      earthDate: '23 Setembro de 2023',
      maxTemp: -15,
      minTemp: -147,
    },
    {
      solesDate: 'SOL 270',
      earthDate: '23 Setembro de 2023',
      maxTemp: -15,
      minTemp: -147,
    },
    {
      solesDate: 'SOL 271',
      earthDate: '23 Setembro de 2023',
      maxTemp: -15,
      minTemp: -147,
    },
    {
      solesDate: 'SOL 272',
      earthDate: '23 Setembro de 2023',
      maxTemp: -15,
      minTemp: -147,
    },
  ];
}
