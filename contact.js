// Select elements
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.mobile-menu .close-btn');

// Open mobile menu
menuToggle.addEventListener('click', () => {
  mobileMenu.classList.add('active');
});

// Close mobile menu
closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});

// Optional: close menu when clicking a link
const mobileLinks = document.querySelectorAll('.mobile-menu a');
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });
});
