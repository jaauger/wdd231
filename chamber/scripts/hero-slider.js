const images = [
  'images/riverton-winter-1.png',
  'images/riverton-winter-2.png',
  'images/riverton-winter-3.png',
  'images/riverton-winter-4.png'
];

const heroImg = document.querySelector('#hero-image');

let currentIndex = 0;

function changeHero() {
  currentIndex = (currentIndex + 1) % images.length;
  heroImg.src = images[currentIndex];
}

setInterval(changeHero, 3000); 
