import { loadComponent } from './common/loadComponent.js';
import { handleNavClick, setActiveNavLink } from './components/header/navigation.js';
import { getCurrentPage } from './common/utils.js';
import { initializeThemeToggle } from './components/header/themeToggle.js';

document.addEventListener('DOMContentLoaded', () => {
    const page = getCurrentPage();
    loadComponent('header-placeholder', 'components/header.html');
    setActiveNavLink(page);
    loadComponent('content-placeholder', `pages/${page}.html`, page);
    loadComponent('footer-placeholder', 'components/footer.html');
    if (page === 'home') {
        history.replaceState(null, '', '/');
    }
    initializeThemeToggle();
});

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('header__nav-link')) {
        e.preventDefault();
        const page = e.target.getAttribute('data-page');
        handleNavClick(page);
    }
});

window.addEventListener('popstate', () => {
    const page = getCurrentPage();
    loadComponent('content-placeholder', `pages/${page}.html`, page);
    setActiveNavLink(page);
});
