import {BASE_URL, allProducts} from './utils/settings.js';
import { showNavbarBgOnScroll } from './ui/showNavbarBgOnScroll.js';
import renderHeroBanner from './elements/renderHerobanner.js';
import renderFeatured from './elements/renderFeatured.js';
import {renderNavbar} from './elements/renderNavbar.js';
import {saveToSessionStorage, getFromSessionStorage} from './utils/storage.js';
import {editBackgroundImg} from './elements/renderHerobanner.js';
import {spinner} from './elements/spinner.js';


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

(  () => {
    const productsUrl = `${BASE_URL}/products`;
        spinner('.featured-container');

        setTimeout(async () => {

        try {
            const res = await fetch(productsUrl);
            const products = await res.json();
            spinner('.featured-container', "d-none");
            renderFeatured(products);
            saveToSessionStorage(allProducts, products);
    
        }

        catch(error) {
            console.log(error)
        }
            
        }, 1000);
       

   

})();















