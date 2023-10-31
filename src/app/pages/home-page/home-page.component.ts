import { Component } from '@angular/core';
import { ICard } from 'src/app/interfaces/home-card';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  /**
   * An array of cards containing information about each card.
   */
  cards: ICard[] = [
    {
      cardImage: 'assets/images/home/mars-terrain.jpeg',
      cardTitle: 'Meteorologia em Marte',
      cardSubTitle:
        'Veja a previsão do tempo em Marte ao vivo! Descubra como são as temperaturas no planeta vermelho.',
      route: '/home/meteorology',
    },
    {
      cardImage: 'assets/images/home/rocket.jpeg',
      cardTitle: 'Viagens para Marte',
      cardSubTitle:
        'O calendário 2023 para Marte está fechado! Em breve abriremos novas inscrições para visitações em 2025.',
      route: '',
    },
    {
      cardImage: 'assets/images/home/robot.jpeg',
      cardTitle: 'Notícias de Marte',
      cardSubTitle:
        'Ansioso por notícias? Logo mais estará disponível o blog “FalaOrion”, seu portal de notícias da Via Láctea!',
      route: '',
    },
  ];
}
