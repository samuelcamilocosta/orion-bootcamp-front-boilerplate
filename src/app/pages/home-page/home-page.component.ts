import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  cards = [
    {
      cardImage: 'assets/images/home/mars-terrain.jpeg',
      cardTitle: 'Meteorologia em Marte',
      cardSubTitle:
        'Veja a previsão do tempo em Marte ao vivo! Descubra como são as temperaturas no planeta vermelho.',
      routeLink: '/home/meteorology',
    },
    {
      cardImage: 'assets/images/home/rocket.jpeg',
      cardTitle: 'Viagens para Marte',
      cardSubTitle:
        'O calendário 2023 para Marte está fechado! Em breve abriremos novas inscrições para visitações em 2025.',
      routeLink: 'soon',
    },
    {
      cardImage: 'assets/images/home/robot.jpeg',
      cardTitle: 'Notícias de Marte',
      cardSubTitle:
        'Ansioso por notícias? Logo mais estará disponível o blog “FalaOrion”, seu portal de notícias da Via Láctea!',
      routeLink: '',
    },
  ];
}
