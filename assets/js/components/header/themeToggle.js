import { initializeMenuToggle } from './menuToggle.js';

export const initializeThemeToggle = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    }

    const themeToggleButtons = document.querySelectorAll('#theme-toggle, #theme-toggle-desktop');
    themeToggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            let currentTheme = document.documentElement.getAttribute('data-theme');
            let newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    });

    initializeMenuToggle();
};
