import { initializeMenuToggle } from './menuToggle.js';

export const initializeThemeToggle = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        document.getElementById('theme-toggle').checked = savedTheme === 'dark';
        document.getElementById('theme-toggle-desktop').checked = savedTheme === 'dark';
    }

    const themeToggleButtons = document.querySelectorAll('#theme-toggle, #theme-toggle-desktop');
    themeToggleButtons.forEach(button => {
        button.addEventListener('change', () => {
            let currentTheme = document.documentElement.getAttribute('data-theme');
            let newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    });

    initializeMenuToggle();
};
