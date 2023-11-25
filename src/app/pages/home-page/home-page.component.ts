import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ICard } from 'src/app/interfaces/card-params-interface';
import { AuthService } from 'src/app/services/auth/auth.service';
import Swiper from 'swiper';
import { Keyboard, Mousewheel, Navigation } from 'swiper/modules';
import { HomePageCardsService } from '../../api/v1/home-page-cards.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})

/**
 * HomePageComponent
 *
 * component that works as a navigation menu
 */
export class HomePageComponent implements AfterViewInit, OnInit {
  /**
   * Swiper instance for a specific component.
   */
  swiper?: Swiper;
  cards: ICard[] = [];

  constructor(
    private homePageCardsService: HomePageCardsService,
    private authService: AuthService
  ) {}

  /**
   * Lifecycle hook that is called after Angular has fully initialized a component's view.
   */
  ngAfterViewInit(): void {
    this.swiperInit();
  }

  /**
   *  Initializes the Swiper instance for the specified container with the given configuration options.
   */
  private swiperInit(): void {
    this.swiper = new Swiper('.swiper-container', {
      modules: [Navigation, Keyboard, Mousewheel],

      // Base parameters
      direction: 'horizontal',
      slidesPerView: 3,
      spaceBetween: 35,
      grabCursor: true,

      // Navigation
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      mousewheel: true,
      keyboard: {
        enabled: true,
      },
    });
  }

  ngOnInit(): void {
    this.loadData();
  }

  async loadData() {
    this.cards = await this.homePageCardsService.getHomeCardsData();
  }

  checkRole() {
    return this.authService.isPremium();
  }
}
