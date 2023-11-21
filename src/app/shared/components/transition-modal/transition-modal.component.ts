import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

@Component({
  selector: 'app-transition-modal',
  templateUrl: './transition-modal.component.html',
  styleUrls: ['./transition-modal.component.scss'],
})

/**
 * Transition Componente to be used after login authentication before loading the home-page
 */
export class TransitionModalComponent implements AfterViewInit {
  /**
   * Swiper instance for TransitionModalComponent.
   */
  swiper?: Swiper;

  /**
   * Lifecycle hook that is called after Angular has fully initialized the view.
   */
  ngAfterViewInit(): void {
    this.swiperInit();
  }

  /**
   *  Initializes the Swiper instance for the specified container with the given configuration options.
   */
  private swiperInit(): void {
    this.swiper = new Swiper('.swiper-container', {
      modules: [Navigation, Pagination],

      // Base parameters
      direction: 'horizontal',
      slidesPerView: 1,
      speed: 1100,
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
