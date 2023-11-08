import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ICarouselCard } from 'src/app/interfaces/carousel-card-params-interface';

@Component({
  selector: 'app-meteorology-page',
  templateUrl: './meteorology-page.component.html',
  styleUrls: ['./meteorology-page.component.scss'],
})
export class MeteorologyPageComponent implements OnInit, OnDestroy {
  cards: ICarouselCard[] = [
    {
      solesDate: 'SOL 259',
      earthDate: '23 Setembro de 2023',
      maxTemp: -15,
      minTemp: -147,
    },
    {
      solesDate: 'SOL 260',
      earthDate: '23 Setembro de 2023',
      maxTemp: -15,
      minTemp: -147,
    },
    {
      solesDate: 'SOL 261',
      earthDate: '23 Setembro de 2023',
      maxTemp: -15,
      minTemp: -147,
    },
    {
      solesDate: 'SOL 262',
      earthDate: '23 Setembro de 2023',
      maxTemp: -15,
      minTemp: -147,
    },
    {
      solesDate: 'SOL 263',
      earthDate: '23 Setembro de 2023',
      maxTemp: -15,
      minTemp: -147,
    },
    {
      solesDate: 'SOL 264',
      earthDate: '23 Setembro de 2023',
      maxTemp: -15,
      minTemp: -147,
    },
    {
      solesDate: 'SOL 265',
      earthDate: '23 Setembro de 2023',
      maxTemp: -15,
      minTemp: -147,
    },
    {
      solesDate: 'SOL 266',
      earthDate: '23 Setembro de 2023',
      maxTemp: -15,
      minTemp: -147,
    },
    {
      solesDate: 'SOL 267',
      earthDate: '23 Setembro de 2023',
      maxTemp: -15,
      minTemp: -147,
    },
    {
      solesDate: 'SOL 268',
      earthDate: '23 Setembro de 2023',
      maxTemp: -15,
      minTemp: -147,
    },
    {
      solesDate: 'SOL 269',
      earthDate: '23 Setembro de 2023',
      maxTemp: -15,
      minTemp: -147,
    },
    {
      solesDate: 'SOL 270',
      earthDate: '23 Setembro de 2023',
      maxTemp: -15,
      minTemp: -147,
    },
    {
      solesDate: 'SOL 271',
      earthDate: '23 Setembro de 2023',
      maxTemp: -15,
      minTemp: -147,
    },
    {
      solesDate: 'SOL 272',
      earthDate: '23 Setembro de 2023',
      maxTemp: -15,
      minTemp: -147,
    },
  ];

  currentIndex = 0;
  visibleCards: ICarouselCard[] = [];
  slideOffset = 0;

  private isDragging = false;
  private dragStartX = 0;

  timeoutId: number | undefined;

  ngOnInit(): void {
    this.updateVisibleCards();
    this.resetTimer();
  }

  ngOnDestroy() {
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId);
    }
  }

  resetTimer() {
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId);
    }
    this.timeoutId = window.setTimeout(() => this.goToNext(), 3000);
  }

  updateVisibleCards() {
    const maxCardsInView = 3; // Adjust this to your desired number of cards in the viewport
    this.visibleCards = this.cards.slice(
      this.currentIndex,
      this.currentIndex + maxCardsInView
    );
  }

  goToPrevious(): void {
    this.currentIndex = Math.max(0, this.currentIndex - 1);
    this.updateVisibleCards();
    this.resetTimer();
  }

  goToNext(): void {
    this.currentIndex = Math.min(this.cards.length - 1, this.currentIndex + 1);
    this.updateVisibleCards();
    this.resetTimer();
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    if (this.isDragging) {
      this.isDragging = false;
      const dragEndX = event.clientX;
      const dragDistance = dragEndX - this.dragStartX;
      if (dragDistance > 0) {
        this.goToPrevious();
      } else if (dragDistance < 0) {
        this.goToNext();
      }
    }
  }

  onMouseDown(event: MouseEvent) {
    this.isDragging = true;
    this.dragStartX = event.clientX;
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      const currentX = event.clientX;
      this.slideOffset = currentX - this.dragStartX;
    }
  }

  @HostListener('document:mouseleave', ['$event'])
  onMouseLeave(event: MouseEvent) {
    if (this.isDragging) {
      this.isDragging = false;
      // You may reset the drag state or perform any other necessary actions here.
    }
  }
}

// showPrevBtn() {
//   return this.currentCardIndex === 0 ? 'none' : 'block';
// }

// ngAfterViewInit() {
//   this.carousel.nativeElement.addEventListener('swipeleft', () =>
//     this.nextCard()
//   );
//   this.carousel.nativeElement.addEventListener('swiperight', () =>
//     this.prevCard()
//   );
// }
// nextCard() {
//   this.currentCardIndex = (this.currentCardIndex + 1) % this.cards.length;
// }
// prevCard() {
//   this.currentCardIndex =
//     (this.currentCardIndex - 1 + this.cards.length) % this.cards.length;
// }
