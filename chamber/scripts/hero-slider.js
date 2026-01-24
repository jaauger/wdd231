const images = [
  'images/riverton-winter-1-sm.webp',
  'images/riverton-winter-2-sm.webp',
  'images/riverton-winter-3-sm.webp',
  'images/riverton-winter-4-sm.webp'
];

const heroImg = document.querySelector('#hero-image');

let currentIndex = 0;

function changeHero() {
  currentIndex = (currentIndex + 1) % images.length;
  heroImg.src = images[currentIndex];
}

setInterval(changeHero, 3000); 
