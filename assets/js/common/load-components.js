// Function to load components with transitions
function loadComponent(elementId, filePath, activeNavId = null) {
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
                    document.querySelectorAll('.header__nav-link').forEach(link => {
                        link.classList.remove('header__nav-link--active');
                    });
                    document.querySelector(`[data-page="${activeNavId}"]`).classList.add('header__nav-link--active');
                }
            });
    }, 500); // Match this duration with the fade-out transition duration
}

// Function to handle navigation clicks
function handleNavClick(page) {
    if (page === 'home') {
        history.pushState(null, '', '/'); // Set the URL to the base URL for Home
    } else {
        history.pushState(null, '', `#${page}`);
    }
    loadComponent('content-placeholder', `pages/${page}.html`, page);
}

// Initial load or page reload
document.addEventListener('DOMContentLoaded', function () {
    const page = location.hash.substring(1) || 'home';
    loadComponent('content-placeholder', `pages/${page}.html`, page);
    if (page === 'home') {
        history.replaceState(null, '', '/'); // Set the URL to the base URL for Home
    }
});

// Event listener for navigation links
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('header__nav-link')) {
        e.preventDefault();
        const page = e.target.getAttribute('data-page');
        handleNavClick(page);
    }
});

// Handle back/forward navigation
window.addEventListener('popstate', function () {
    const page = location.hash.substring(1) || 'home';
    loadComponent('content-placeholder', `pages/${page}.html`, page);
});
