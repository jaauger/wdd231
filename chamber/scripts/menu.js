const toggleBtn = document.querySelector('.menu-toggle');
const navList = document.querySelector('.navigation');

if (toggleBtn && navList) {
  toggleBtn.addEventListener('click', () => {
    const isOpen = navList.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', isOpen);
  });
}