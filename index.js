function initMenu() {
  // get the hamburger element
  const hamburger = document.querySelector('#hamburger');
  // get the close-btn element
  const closeBtn = document.querySelector('#close-hamburger');
  // get the menu-item elements
  const menuItems = document.querySelectorAll('.menu-item');
  // get the mobile menu container element
  const mobileMenu = document.querySelector('.mobile-menu');
  // toggle visibility function
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
  // navigate to the actual links on the menu item(s)
  if (menuItems) {
    document.querySelectorAll('.menuItems').forEach((item) => {
      item.addEventListener('click', (event) => {
        // check if the clicked element is a link
        if (event.target.tagName === 'a') {
          // prevent the default link behavior
          event.preventDefault();
          // get the link href
          const href = event.target.getAttribute('href');
          // navigate to the link
          window.location.href = href;
        }
      });
    });
  }
}
window.addEventListener('DOMContentLoaded', () => {
  initMenu();
});
