import { BASE_URL, allProducts } from "./utils/settings.js";
import renderAllProducts from "./elements/renderAllProducts.js";
import { renderNavbar } from "./elements/renderNavbar.js";
import {
  saveToSessionStorage,
} from "./utils/storage.js";
import {renderFilterOptions} from './elements/renderFilterOptions.js';
import {fectData} from './helpers/fetcData.js';
import {showMessage} from './helpers/showMessage.js';
import {removeMessage} from './helpers/removeMessage.js';
import {showNavbarBgOnScroll} from './ui/showNavbarBgOnScroll.js'
showNavbarBgOnScroll();

renderNavbar();

(() => {

  removeMessage('.shop-container .message-container');

    const URL = `${BASE_URL}/products`;

    fectData(URL).then(result => {
      if(!result || typeof result === 'string') {
        showMessage('danger', result, '.shop-container .message-container');
        return;
      
         };
     
         saveToSessionStorage(allProducts, result);
         renderAllProducts(result, "Shop is currently empty", ".shop-container");
         renderFilterOptions(result);
    });
})();


