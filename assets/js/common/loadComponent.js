import { initializeThemeToggle } from '../components/header/themeToggle.js';
import { setActiveNavLink } from '../components/header/navigation.js';

export const loadComponent = (elementId, filePath, activeNavId = null) => {
    const contentElement = document.getElementById(elementId);

    contentElement.classList.remove('fade-in');
    contentElement.classList.add('fade-out');

    setTimeout(() => {
        fetch(filePath)
            .then(response => response.text())
            .then(data => {
                contentElement.innerHTML = data;
                contentElement.classList.remove('fade-out');
                contentElement.classList.add('fade-in');
                if (activeNavId) {
                    setActiveNavLink(activeNavId);
                }
                if (elementId === 'header-placeholder') {
                    initializeThemeToggle();
                }
            });
    }, 300);
};
