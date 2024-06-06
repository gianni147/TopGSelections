export const getCurrentPage = () => {
    return location.hash.substring(1) || 'home';
};
