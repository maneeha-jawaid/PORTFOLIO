document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');
    const navButtons = document.querySelector('.nav-buttons');

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('show-nav-links');
        navButtons.classList.toggle('show-nav-buttons');
    });
});
