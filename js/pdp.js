import { BASE_URL } from "./utils/settings.js";
import { productDetail } from './components/productDetail.js'
import { renderNavbar } from "./elements/renderNavbar.js";
import {addToCart} from './helpers/addtoCart.js'
import {spinner} from './elements/spinner.js';
import {fectData} from './helpers/fetcData.js';
import {showMessage} from './helpers/showMessage.js';
import {removeMessage} from './helpers/removeMessage.js';
import {showNavbarBgOnScroll} from './ui/showNavbarBgOnScroll.js'

showNavbarBgOnScroll();
renderNavbar();

// Get the querystring
const queryString = window.location.search;

//Parse the querystring
const urlParam = new URLSearchParams(queryString);
const id = urlParam.get("id");



( () => {
  removeMessage('.pdp-detail-container .message-container')
    const URL = `${BASE_URL}/products/${id}`;

    fectData(URL).then(result => {
      if(!result || typeof result === 'string') {
        showMessage('danger', result, '.pdp-detail-container .message-container');
        return;
      
         }
         document.title = result.title;
         const breadcrumb = document.querySelector('.breadcrumb');
         breadcrumb.innerHTML += `<li class="breadcrumb-item active" aria-current="page">${result.title}</li>`
         productDetail(result)
         addToCart(result);
    });
    
}
)();










