export const showNavbarOnScroll = () => {
    const getWindowScrollY = () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 15) {
            navbar.classList.add('custom-bg')

        } else {
            navbar.classList.remove('custom-bg')
        }
    };

    window.addEventListener("scroll", getWindowScrollY);

    const hamburger = document.querySelector('.custom-toggler');

    const addBackground = () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 15 === false) {
            navbar.classList.toggle('custom-bg')
        }

    }

    hamburger.addEventListener('click', addBackground);
};