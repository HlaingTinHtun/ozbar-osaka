document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.getElementById('hamburger-menu');
  const mobileMenu = document.getElementById('mobile-menu');

  // Ensure navbar starts transparent
  navbar.classList.add('transparent');
  navbar.classList.remove('scrolled');

  // Scroll effect
  window.addEventListener('scroll', function () {
    if(window.scrollY > 50) {
      navbar.classList.add('scrolled');
      navbar.classList.remove('transparent');
      if (hamburger) hamburger.classList.add('scrolled');
    } else {
      navbar.classList.add('transparent');
      navbar.classList.remove('scrolled');
      if (hamburger) hamburger.classList.remove('scrolled');
    }
  });

  // Hamburger toggle
  if (hamburger && mobileMenu) {
    let menuOpen = false;
    hamburger.addEventListener('click', function (e) {
      e.stopPropagation();
      menuOpen = !menuOpen;
      if (menuOpen) {
        mobileMenu.classList.add('show');
        mobileMenu.style.display = 'flex';
        navbar.classList.add('menu-open');
      } else {
        mobileMenu.classList.remove('show');
        mobileMenu.style.display = 'none';
        navbar.classList.remove('menu-open');
      }
    });
    // Hide menu when clicking outside
    document.addEventListener('click', function (e) {
      if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
        menuOpen = false;
        mobileMenu.classList.remove('show');
        mobileMenu.style.display = 'none';
        navbar.classList.remove('menu-open');
      }
    });
    // Hide menu when clicking a menu item
    mobileMenu.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function () {
        menuOpen = false;
        mobileMenu.classList.remove('show');
        mobileMenu.style.display = 'none';
        navbar.classList.remove('menu-open');
      });
    });
  }
});
