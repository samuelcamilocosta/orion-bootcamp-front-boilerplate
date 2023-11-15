import { Component, OnInit } from '@angular/core';
import { ITempIndicator } from 'src/app/interfaces/itemp-indicator';
import { ISolesDataInterface } from 'src/app/interfaces/soles-data-interface';
import { register } from 'swiper/element/bundle';
import { SolesService } from '../../api/v1/soles.service';

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
export class MeteorologyPageComponent implements OnInit {
  /**
   * tempType: represents temperature scale (Celsius or Fahrenheit) string on Hero card
   * carTempType: represents temperature scale (Celsius or Fahrenheit) string on carousel cards
   * heroCardParams: variable to change hero card params.
   * cards: array of soles params from api request.
   * difTempMax & difTempMin represents the max/min temperature difference between today and yesterday.
   * maxIndicator & minIndicator: represents the temperature indicator on hero card.
   */
  tempType = 'C | F';
  carTempType = 'C';
  heroCardParams?: ISolesDataInterface;
  cards: ISolesDataInterface[] = [];
  difTempMax = 0;
  difTempMin = 0;
  maxIndicator?: ITempIndicator;
  minIndicator?: ITempIndicator;

  /**
   * Constructor
   *
   * inject the solesService to handle soles api request
   */
  constructor(private solesService: SolesService) {}

  /**
   * ngOnInit
   *
   * apply loadData method when page initializes
   */
  ngOnInit() {
    this.loadData();
  }

  /**
   * loadData
   *
   * fetches cards data and apply those data to the cards on page
   */
  private async loadData(): Promise<void> {
    this.cards = await this.solesService.getData();

    this.heroCardParams = this.cards[0];

    this.calculateDifTemp(0);
  }

  /**
   * calculateCelsius
   *
   * convert temperature Fahrenheit to Celsius
   */
  private calculateCelsius(): void {
    this.cards.forEach((card) => {
      card.maximumTemperature = (card.maximumTemperature - 32) * (5 / 9);
      card.minimumTemperature = (card.minimumTemperature - 32) * (5 / 9);
    });
  }

  /**
   * calculateFahrenheit
   *
   * convert temperature Celsius to Fahrenheit
   */
  private calculateFahrenheit(): void {
    this.cards.forEach((card) => {
      card.maximumTemperature = card.maximumTemperature * (9 / 5) + 32;
      card.minimumTemperature = card.minimumTemperature * (9 / 5) + 32;
    });
  }

  /**
   * convertTemp
   *
   * calculate and change the temperature type and value of all cards on click
   */
  protected convertTemp(): void {
    const heroCelsius = 'C | F';
    const carouselCelsius = 'C';
    const heroFahrenheit = 'F | C';
    const carouselFahrenheit = 'F';

    if (this.tempType === heroCelsius) {
      this.calculateFahrenheit();
    } else {
      this.calculateCelsius();
    }

    this.tempType =
      this.tempType === heroCelsius ? heroFahrenheit : heroCelsius;
    this.carTempType =
      this.carTempType === carouselCelsius
        ? carouselFahrenheit
        : carouselCelsius;
  }

  /**
   * updateHeroCardParams
   *
   * updates the hero card params when a carousel card is clicked
   *
   * @param i: index of the carousel card
   */
  protected updateHeroCardParams(i: number): void {
    this.heroCardParams = this.cards[i];

    this.calculateDifTemp(i);
  }

  /**
   * calculateDifTemp
   *
   * calculate the temperature difference between current day and yesterday and apply the suitable indicator (up,down,equal)
   *
   * @param i represents the index of cards array
   */
  private calculateDifTemp(i: number): void {
    let currentDayMax = 0;
    let yesterdayMax = 0;
    let currentDayMin = 0;
    let yesterdayMin = 0;

    if (i !== this.cards.length - 1) {
      currentDayMax = this.cards[i].maximumTemperature;
      yesterdayMax = this.cards[i + 1].maximumTemperature;
      currentDayMin = this.cards[i].minimumTemperature;
      yesterdayMin = this.cards[i + 1].minimumTemperature;

      this.difTempMax = currentDayMax - yesterdayMax;
      this.difTempMin = currentDayMin - yesterdayMin;
    } else {
      this.difTempMax = 0;
      this.difTempMin = 0;
    }

    this.tempIndicator();
  }

  /**
   * tempIndicator
   *
   * verifies which indicator will be implemented by the diffTempMax and diffTemMin
   */
  private tempIndicator(): void {
    this.maxIndicator = this.getIndicatorValues(this.difTempMax);
    this.minIndicator = this.getIndicatorValues(this.difTempMin);
  }

  /**
   * getIndicatorValues
   *
   * gets which indicator will be rendered to the tempIndicator method
   *
   * @param diff its a number that represents the difference of temperature (difTempMax or difTempMin)
   * @returns an object type ITempIndicator that represents which indicator will be rendered
   */
  private getIndicatorValues(diff: number): ITempIndicator {
    return { up: diff > 0, down: diff < 0, equal: diff === 0 };
  }
}
