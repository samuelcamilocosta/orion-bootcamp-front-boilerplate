import { Component, OnInit } from '@angular/core';
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
  newParams: ISolesDataInterface;
  cards: ISolesDataInterface[];
  /**
   * Constructor
   *
   * initializes the hero card params
   */
  constructor(private solesService: SolesService) {
    this.cards = [];
    this.newParams = this.cards[0];
  }

  async ngOnInit() {
    await this.loadData();
  }

  async loadData(): Promise<void> {
    this.cards = await this.solesService.getData();
    console.log(this.cards);
    this.newParams = this.cards[0];
    console.log(this.newParams);
  }

  /**
   * newParams
   *
   * represents the hero card params
   */

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
}
