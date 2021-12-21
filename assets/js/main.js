import SwipeCarousel from './swipe-carousel.js';

const carousel = new SwipeCarousel({
    conatainerID: '#carousel',
    slideID: '.slide',
    interval: 3000,
    isPlaying: false
});

carousel.init();
