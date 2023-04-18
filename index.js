function initMenu() {
  // get the hamburger element
  const hamburger = document.querySelector('#hamburger');
  // get the close-btn element
  const closeBtn = document.querySelector('#close-hamburger');
  // get the menu-item elements
  const links = document.querySelectorAll('.menu-item a');
  // get the mobile menu container element
  const mobileMenu = document.querySelector('.mobile-menu');
  // Kill the nav menu
  function destroyNavMenu() {
    mobileMenu.style.display = 'none';
  }
  // toggle visibility function for nav menu
  function toggleNavMenu() {
    mobileMenu.classList.toggle('show-menu');
  }
  // open mobile nav container
  if (hamburger) {
    hamburger.addEventListener('click', toggleNavMenu);
  }
  // close mobile nav container
  if (closeBtn) {
    closeBtn.addEventListener('click', toggleNavMenu);
  }
  // navigate to the actual links on the menu item(s) - li a
  if (links) {
    links.forEach((link) => {
      // add event listener to every link  - li a
      link.addEventListener('click', (event) => {
        // prevent the default link behavior
        event.preventDefault();
        // get the href attribute of each link - li a
        const href = link.getAttribute('href');
        // use the href attribute to find the target element on the page
        const target = document.querySelector(href);
        // destroy nav menu. Alternatively - toggleNavMenu()
        destroyNavMenu();
        // smoothly scroll to the target location
        target.scrollIntoView({
          behavior: 'smooth',
        });
      });
    });
  }
}
window.addEventListener('DOMContentLoaded', () => {
  initMenu();
});
