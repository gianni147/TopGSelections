import { handleNavClick} from './navigation.js';

export const initializeMenuToggle = () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.header__nav-link');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            if (navMenu.classList.contains('header__nav-active')) {
                navMenu.classList.remove('header__nav-active');
                menuToggle.classList.remove('is-active');
            } else {
                navMenu.classList.add('header__nav-active');
                menuToggle.classList.add('is-active');
            }
        });

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = link.getAttribute('data-page');
                handleNavClick(page);

                if (navMenu.classList.contains('header__nav-active')) {
                    navMenu.classList.remove('header__nav-active');
                    menuToggle.classList.remove('is-active');
                }
            });
        });
    }
};
