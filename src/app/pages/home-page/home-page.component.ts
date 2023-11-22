import { AfterViewInit, Component } from '@angular/core';
import { ICard } from 'src/app/interfaces/home-card-params';
import Swiper from 'swiper';
import { Keyboard, Mousewheel, Navigation } from 'swiper/modules';

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
export class HomePageComponent implements AfterViewInit {
  /**
   * Swiper instance for a specific component.
   */
  swiper?: Swiper;

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

  /**
   * An array of cards containing information about each card.
   */
  cards: ICard[] = [
    {
      cardImage: 'assets/images/home/mars-terrain.jpeg',
      imageAltText:
        'Martian landscape with scattered small rocks and sand dunes.',
      cardTitle: 'Meteorologia em Marte',
      cardSubTitle:
        'Veja a previsão do tempo em Marte ao vivo! Descubra como são as temperaturas no planeta vermelho.',
      path: '/page/meteorology',
      btnText: 'ENTRAR',
    },
    {
      cardImage: 'assets/images/home/rocket.jpeg',
      imageAltText:
        'Rocket launching into the sky with plumes of smoke and fire.',
      cardTitle: 'Viagens para Marte',
      cardSubTitle:
        'O calendário 2023 para Marte está fechado! Em breve abriremos novas inscrições para visitações em 2025.',
      path: '/page/meteorology',
      btnText: 'ENTRAR',
    },
    {
      cardImage: 'assets/images/home/robot.jpeg',
      imageAltText:
        'Exploration robot on Mars collecting data on the Martian surface.',
      cardTitle: 'Notícias de Marte',
      cardSubTitle:
        'Ansioso por notícias? Logo mais estará disponível o blog “FalaOrion”, seu portal de notícias da Via Láctea!',
      path: '',
      btnText: 'ENTRAR',
    },
    {
      cardImage: 'assets/images/home/robot.jpeg',
      imageAltText:
        'Exploration robot on Mars collecting data on the Martian surface.',
      cardTitle: 'Notícias de Marte',
      cardSubTitle:
        'Ansioso por notícias? Logo mais estará disponível o blog “FalaOrion”, seu portal de notícias da Via Láctea!',
      path: '',
      btnText: 'ENTRAR',
    },
    {
      cardImage: 'assets/images/home/robot.jpeg',
      imageAltText:
        'Exploration robot on Mars collecting data on the Martian surface.',
      cardTitle: 'Notícias de Marte',
      cardSubTitle:
        'Ansioso por notícias? Logo mais estará disponível o blog “FalaOrion”, seu portal de notícias da Via Láctea!',
      path: '',
      btnText: 'ENTRAR',
    },
    {
      cardImage: 'assets/images/home/robot.jpeg',
      imageAltText:
        'Exploration robot on Mars collecting data on the Martian surface.',
      cardTitle: 'Notícias de Marte',
      cardSubTitle:
        'Ansioso por notícias? Logo mais estará disponível o blog “FalaOrion”, seu portal de notícias da Via Láctea!',
      path: '',
      btnText: 'ENTRAR',
    },
  ];
}
