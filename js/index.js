import BASE_URL from './utils/settings.js'
import { showNavbarOnScroll } from './ui/showNavbarOnScroll.js';
import renderHeroBanner from './elements/renderHerobanner.js';
import renderFeatured from './elements/renderFeatured.js'



showNavbarOnScroll();


( async () => {
    const URL = `${BASE_URL}/home`;
    try {
        const res = await fetch(URL);
        const banner = await res.json();
        renderHeroBanner(banner.hero_url)
    }

    catch(error) {
        console.log(error)
    }
})();

( async () => {
    const URL = `${BASE_URL}/products`;

    try {
        const res = await fetch(URL);
        const products = await res.json();
        renderFeatured(products)
    }

    catch(error) {
        console.log(error)
    }
})();



