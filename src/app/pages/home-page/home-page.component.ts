import { Component } from '@angular/core';
import { ICard } from 'src/app/interfaces/home-card-params';

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
      imageAltText:
        'Martian landscape with scattered small rocks and sand dunes.',
      cardTitle: 'Meteorologia em Marte',
      cardSubTitle:
        'Veja a previsão do tempo em Marte ao vivo! Descubra como são as temperaturas no planeta vermelho.',
      path: '/page/meteorology',
    },
    {
      cardImage: 'assets/images/home/rocket.jpeg',
      imageAltText:
        'Rocket launching into the sky with plumes of smoke and fire.',
      cardTitle: 'Viagens para Marte',
      cardSubTitle:
        'O calendário 2023 para Marte está fechado! Em breve abriremos novas inscrições para visitações em 2025.',
      path: '',
    },
    {
      cardImage: 'assets/images/home/robot.jpeg',
      imageAltText:
        'Exploration robot on Mars collecting data on the Martian surface.',
      cardTitle: 'Notícias de Marte',
      cardSubTitle:
        'Ansioso por notícias? Logo mais estará disponível o blog “FalaOrion”, seu portal de notícias da Via Láctea!',
      path: '',
    },
  ];
}
