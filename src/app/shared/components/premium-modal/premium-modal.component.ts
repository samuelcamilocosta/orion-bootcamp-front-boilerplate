import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ICard } from 'src/app/interfaces/home-card-params';

@Component({
  selector: 'app-premium-modal',
  templateUrl: './premium-modal.component.html',
  styleUrls: ['./premium-modal.component.scss'],
})
export class PremiumModalComponent {
  /**
   * premiumStyleActive
   *
   * apply "the card-content-premium" class on home-cards component to reuse it
   */
  premiumStyleActive = true; //

  constructor(private dialogRef: MatDialogRef<PremiumModalComponent>) {}

  /**
   * closeDialog
   *
   * closes the PremiumModalComponent dialog
   */
  closeDialog() {
    this.dialogRef.close();
  }

  /**
   * Placeholder until the api integration
   */
  cards: ICard[] = [
    {
      cardImage: 'assets/images/home/mars-terrain.jpeg',
      imageAltText:
        'Martian landscape with scattered small rocks and sand dunes.',
      cardTitle: 'Plano Pesquisador (Premium)',
      cardSubTitle:
        'Desbloqueie acesso total às maravilhas de Marte com o Plano Explorador (Premium) do Orion Marte.',
      path: '/page/meteorology',
      btnText: 'VEJA COMO SE TORNAR UM PESQUISADOR',
    },
    {
      cardImage: 'assets/images/home/rocket.jpeg',
      imageAltText:
        'Rocket launching into the sky with plumes of smoke and fire.',
      cardTitle: 'Plano Astronauta (Enterprise)',
      cardSubTitle:
        'Maximize seu potencial explorador com o Plano Astronauta: soluções personalizadas, acesso exclusivo e suporte premium.',
      path: '',
      btnText: 'VEJA COMO SE TORNAR UM ASTRONAUTA',
    },
  ];
}
