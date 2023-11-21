import { AfterViewInit, Component, ElementRef } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef) {}
  swiper?: Swiper;
  ngAfterViewInit(): void {
    this.swiper = new Swiper(
      this.elementRef.nativeElement.querySelector('.swiper'),
      {
        modules: [Navigation, Pagination],

        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 3,
        spaceBetween: 32,

        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      }
    );
  }
}
