import { displayProductCard } from "../helpers/displayProductCard.js";
import {lasyLoadImageas} from '../helpers/lasyLoadImageas.js';
import {saveFavourites} from '../helpers/saveFavourites.js'


const renderAllProducts = (products, msg, container) => {
  const element = document.querySelector(container);
  element.innerHTML = "";

  if(products.length === 0) {
   if(msg) {
    return element.innerHTML =`<div class="alert alert-info" role="alert">
    ${msg}
  </div>`;
   }
    const customMsg = `<div class="alert alert-info" role="alert">
    No items available, plese try again later.
  </div>`;
    return element.innerHTML = customMsg;
    
  }

  displayProductCard(products, element)
  saveFavourites();
  lasyLoadImageas();

};

export default renderAllProducts;
