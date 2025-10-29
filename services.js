document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.question').addEventListener('click', () => {
        const answer = item.querySelector('.answer');
        const arrow = item.querySelector('.arrow');
        
        // Toggle the display of the answer
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';

        // Rotate the arrow
        arrow.style.transform = answer.style.display === 'block' ? 'rotate(180deg)' : 'rotate(0deg)';
    });
});
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
