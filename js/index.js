import {BASE_URL, allProducts} from './utils/settings.js';
import { showNavbarBgOnScroll } from './ui/showNavbarBgOnScroll.js';
import renderHeroBanner from './elements/renderHerobanner.js';
import renderFeatured from './elements/renderFeatured.js';
import {renderNavbar} from './elements/renderNavbar.js';
import {saveToSessionStorage, getFromSessionStorage} from './utils/storage.js';
import {editBackgroundImg} from './elements/renderHerobanner.js';


renderNavbar();
editBackgroundImg();
showNavbarBgOnScroll();


( async () => {
    const URL = `${BASE_URL}/home`;
    try {
        const res = await fetch(URL);
        const banner = await res.json();
        renderHeroBanner(banner.hero_url);
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
        renderFeatured(products);
        saveToSessionStorage(allProducts, products);

    }

    catch(error) {
        console.log(error)
    }
})();












