import {BASE_URL, allProducts} from './utils/settings.js';
import { showNavbarBgOnScroll } from './ui/showNavbarBgOnScroll.js';
import renderHeroBanner from './elements/renderHerobanner.js';
import renderFeatured from './elements/renderFeatured.js';
import {renderNavbar} from './elements/renderNavbar.js';
import {saveToSessionStorage, getFromSessionStorage} from './utils/storage.js';
import {editBackgroundImg} from './elements/renderHerobanner.js';
import {spinner} from './elements/spinner.js';
import {fectData} from './helpers/fetcData.js';
import {showMessage} from './helpers/showMessage.js';
import {removeMessage} from './helpers/removeMessage.js';



renderNavbar();
editBackgroundImg();
showNavbarBgOnScroll();


( async () => {
    removeMessage('.herobanner .message-container');
    removeMessage('.featured-container .message-container');
    const homeUrl = `${BASE_URL}/home`;
    const productsUrl = `${BASE_URL}/products`;

    fectData(homeUrl).then(result => {
       if(!result || typeof result === 'string') {
           const msg = "Failed to get background image, check for url misspelling."
        showMessage('danger', msg, '.herobanner .message-container');
        return;
       }
       renderHeroBanner(result.hero_url);
      });

    fectData(productsUrl).then(result => {
        if(!result || typeof result === 'string') {
            showMessage('danger', result, '.featured-container .message-container');
            return;
        
           }
           renderFeatured(result);
           saveToSessionStorage(allProducts, result);
      });
})();









