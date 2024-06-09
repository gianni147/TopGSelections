import { initializeThemeToggle } from '../components/header/themeToggle.js';
import { setActiveNavLink } from '../components/header/navigation.js';

export const loadComponent = (elementId, filePath, activeNavId = null) => {
    const contentElement = document.getElementById(elementId);

    setTimeout(() => {
        fetch(filePath)
            .then(response => response.text())
            .then(data => {
                contentElement.innerHTML = data;
                if (activeNavId) {
                    setActiveNavLink(activeNavId);
                }
                if (elementId === 'header-placeholder') {
                    initializeThemeToggle();
                }
            });
    }, 300);
};
