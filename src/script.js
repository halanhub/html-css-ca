// Hamburger menu toggle
const hamburgerMenu = document.querySelector('.hamburger-menu');
const mobileMenu = document.querySelector('.mobile-menu');

hamburgerMenu.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
    const icon = hamburgerMenu.querySelector('.material-symbols-outlined');
    if (mobileMenu.classList.contains('active')) {
        icon.textContent = 'close';
    } else {
        icon.textContent = 'menu';
    }
});

// Close menu when clicking on a link
const mobileLinks = document.querySelectorAll('.mobile-nav-list a');
mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        const icon = hamburgerMenu.querySelector('.material-symbols-outlined');
        icon.textContent = 'menu';
    });
});

