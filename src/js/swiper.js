import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function initSwipers() {
  const screenWidth = window.innerWidth; // 🔧 оголошуємо один раз

  // Reviews Swiper — тільки для >= 1440px
  if (screenWidth >= 1440) {
    new Swiper('.reviews-swiper', {
      modules: [Navigation],
      loop: true,
      slideClass: 'reviews-swiper-slide',
      wrapperClass: 'reviews-swiper-wrapper',
      direction: 'horizontal',
      navigation: {
        nextEl: '.reviews-nav .custom-next',
        prevEl: '.reviews-nav .custom-prev',
      },
      breakpoints: {
        374: {
          slidesPerView: 1.1,
          spaceBetween: 20,
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });
  }

  // Gallery Swiper — адаптивно для всіх
  const gallerySwiper = new Swiper('.gallery-swiper', {
    modules: [Navigation],
    loop: true,
    slideClass: 'gallery-swiper-slide',
    wrapperClass: 'gallery-swiper-wrapper',
    direction: 'horizontal',
    navigation: {
      nextEl: '.gallery-nav .custom-next',
      prevEl: '.gallery-nav .custom-prev',
    },
    breakpoints: {
      374: {
        slidesPerView: 1.2,
        spaceBetween: 10,
        centeredSlides: true,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 40,
        centeredSlides: false,
      },
    },
  });

  // Показывать 2-й слайд у gallery тільки при <= 375
  if (screenWidth <= 375) {
    gallerySwiper.slideToLoop(1, 0);
  }
}

document.addEventListener('DOMContentLoaded', initSwipers);
