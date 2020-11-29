const addNavbarBG = () => {
    const navbarHome = document.querySelector('.home');
    const navbarContainer = document.querySelector('.container-fluid-navbar');

    if (location.pathname === "/" || location.pathname === "/home.html" || location.pathname === "/index.html") {
        if (window.scrollY > 15) {
            navbarHome.classList.add('custom-bg');
            navbarHome.style.boxShadow = "rgba(7, 7, 7, 0.8) 2px 2px 13px 0px";

        } else {
            navbarHome.classList.remove('custom-bg');
            navbarHome.style.boxShadow = "";
        }

        const hamburger = document.querySelector('.custom-toggler');

        const addBackground = () => {
            if (window.scrollY > 15 === false) {
                navbarHome.classList.toggle('custom-bg')
            }

        }

        hamburger.addEventListener('click', addBackground);
        return;

    } else {

        if (window.scrollY > 15) {
            console.log('ADD..', window.scrollY > 15);

            navbarContainer.style.boxShadow = "rgba(198, 212, 219, 0.86) 2px 2px 13px 0px";
            navbarContainer.style.backgroundColor = "#edf6f9";

        } else {
            console.log('REMOVE..', window.scrollY > 15);
            navbarContainer.style.boxShadow = "";
            navbarContainer.style.backgroundColor = "transparent";
        }


    }
}

export const showNavbarBgOnScroll = () => {


    if (window.scrollY > 15) {
        addNavbarBG();
    }
    const getWindowScrollY = () => {
        addNavbarBG();
    };

    window.addEventListener("scroll", getWindowScrollY);


};