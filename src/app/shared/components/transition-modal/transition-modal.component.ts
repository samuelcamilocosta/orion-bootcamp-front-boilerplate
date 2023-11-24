import { AfterViewInit, Component, OnInit } from '@angular/core';
import { IQuote } from 'src/app/interfaces/quotes-interface';
import Swiper from 'swiper';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { TransitionQuotesService } from '../../../api/v1/transition-quotes.service';

@Component({
  selector: 'app-transition-modal',
  templateUrl: './transition-modal.component.html',
  styleUrls: ['./transition-modal.component.scss'],
})

/**
 * Transition Componente to be used after login authentication before loading the home-page
 */
export class TransitionModalComponent implements AfterViewInit, OnInit {
  /**
   * Swiper instance for TransitionModalComponent.
   */
  swiper?: Swiper;
  quotes?: IQuote[];

  constructor(private transitionQuotesService: TransitionQuotesService) {}

  /**
   * Lifecycle hook that is called after Angular has fully initialized the view.
   */
  ngAfterViewInit(): void {
    this.swiperInit();
  }

  ngOnInit(): void {
    this.fetchQuotes();
  }

  async fetchQuotes() {
    this.quotes = await this.transitionQuotesService.getQuotes();
  }

  /**
   *  Initializes the Swiper instance for the specified container with the given configuration options.
   */
  private swiperInit(): void {
    this.swiper = new Swiper('.swiper-container', {
      modules: [Navigation, Pagination, EffectFade, Autoplay],

      // Base parameters
      direction: 'horizontal',
      slidesPerView: 1,
      speed: 550,
      autoplay: { delay: 2200 },
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },

      // Extras (navigation, pagination,...)
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
}
