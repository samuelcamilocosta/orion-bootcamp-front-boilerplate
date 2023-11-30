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

  /**
   * quotes: represents an array of @type {IQuote}
   */
  quotes?: IQuote[];

  /**
   * constructor
   *
   * @param transitionQuotesService: injected service that handles the HTTP GET request from api for TransitionModalComponent
   */
  constructor(private transitionQuotesService: TransitionQuotesService) {}

  /**
   * Lifecycle hook that is called after Angular has fully initialized the view.
   */
  ngAfterViewInit(): void {
    this.swiperInit();
  }

  /**
   * ngOnInit
   *
   * apply fetchQuotes method when page initializes
   */
  ngOnInit(): void {
    this.fetchQuotes();
  }

  /**
   * fetchQuotes
   *
   * fetches random "quotes" from api to be used on transition-modal
   */
  async fetchQuotes(): Promise<void> {
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
