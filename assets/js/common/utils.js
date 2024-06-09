export const getCurrentPage = () => {
    const path = window.location.hash.substring(1);
    return path || 'home';
};