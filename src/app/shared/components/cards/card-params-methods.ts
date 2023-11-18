import { IHeroCard } from 'src/app/interfaces/hero-card-params-interface';
import { ISolesDataInterface } from 'src/app/interfaces/soles-data-interface';

export class CardParamsMethods {
  heroDateFormat: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  carouselDateFormat: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
  };

  /**
   * getSolNumberMarsDay
   *
   * method to get solNumberMarsDay param
   *
   * @returns solNumberMarsDay or "-"
   */
  protected getSolNumberMarsDay(
    data: IHeroCard | ISolesDataInterface
  ): number | string {
    if ('cardParams' in data) {
      return data.cardParams?.solNumberMarsDay ?? '-';
    } else {
      return data.solNumberMarsDay;
    }
  }

  /**
   * getTerrestrialDate
   *
   * method to get terrestrialDate param and format it to heroDateFormat
   *
   * @returns updated format terrestrialDate or "-"
   */
  protected getTerrestrialDate(
    data: IHeroCard | ISolesDataInterface
  ): number | string {
    if ('cardParams' in data) {
      return (
        data.cardParams.terrestrialDate.toLocaleDateString(
          'pt-br',
          this.heroDateFormat
        ) ?? '-'
      );
    } else {
      return (
        data?.terrestrialDate?.toLocaleDateString(
          'pt-br',
          this.carouselDateFormat
        ) ?? '-'
      );
    }
  }

  /**
   * getMaximumTemperature
   *
   * method to get maximumTemperature param and format it to only show the integer number
   *
   * @returns updated format maximumTemperature or "-"
   */
  protected getMaximumTemperature(
    data: IHeroCard | ISolesDataInterface
  ): number | string {
    if ('cardParams' in data) {
      return data.cardParams.maximumTemperature.toFixed(0) ?? '-';
    } else {
      return data.maximumTemperature?.toFixed(0) ?? '-';
    }
  }

  /**
   * getMaximumTemperature
   *
   * method to get minimumTemperature param and format it to only show the integer number
   *
   * @returns updated format minimumTemperature or "-"
   */
  protected getMinimumTemperature(
    data: IHeroCard | ISolesDataInterface
  ): number | string {
    if ('cardParams' in data) {
      return data.cardParams.minimumTemperature.toFixed(0) ?? '-';
    } else {
      return data.minimumTemperature?.toFixed(0) ?? '-';
    }
  }
}
