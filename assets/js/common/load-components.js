function loadComponent(elementId, filePath, activeNavId = null) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
            if (activeNavId) {
                document.querySelectorAll('.header__nav-link').forEach(link => {
                    link.classList.remove('header__nav-link--active');
                });
                document.getElementById(activeNavId).classList.add('header__nav-link--active');
            }
        });
}

// Event listener for navigation links
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('header__nav-link')) {
        e.preventDefault();
        const page = e.target.getAttribute('data-page');
        loadComponent('content-placeholder', `pages/${page}.html`);
        history.pushState(null, '', `#${page}`);
    }
});

// Handle back/forward navigation
window.addEventListener('popstate', function () {
    const page = location.hash.substring(1) || 'home';
    loadComponent('content-placeholder', `pages/${page}.html`);
});
