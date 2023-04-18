function initMenu() {
  const hamburger = document.querySelector('#hamburger');
  // const closeBtn = document.querySelector('#close-hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('show-menu');
    });
  } 
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('show-menu');
    });
  }
}

window.addEventListener('DOMContentLoaded', () => {
  initMenu();
});
