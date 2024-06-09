import { loadComponent } from '../../common/loadComponent.js';

export const handleNavClick = (page) => {
    if (page === 'home') {
        history.pushState(null, '', '/');
    } else {
        history.pushState(null, '', `#${page}`);
    }
    loadComponent('content-placeholder', `pages/${page}.html`, page);
    setActiveNavLink(page);
};

export const setActiveNavLink = (page) => {
    document.querySelectorAll('.header__nav-link').forEach(link => {
        link.classList.remove('header__nav-link--active');
    });
    const activeLink = document.querySelector(`.header__nav-link[data-page="${page}"]`);
    if (activeLink) {
        activeLink.classList.add('header__nav-link--active');
    }
};
