import { ITempIndicator } from './itemp-indicator';
import { ISolesDataInterface } from './soles-data-interface';

export interface IHeroCard {
  tempType: 'C | F' | 'F | C';
  cardParams: ISolesDataInterface;
  maxIndicator: ITempIndicator;
  minIndicator: ITempIndicator;
}
