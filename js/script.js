  const hamburger = document.getElementById('hamburger');
  const menu = document.querySelector('.navbar-menu-list');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
  });