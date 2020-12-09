import { displayProductCard } from "../helpers/displayProductCard.js";
import { lasyLoadImageas } from '../helpers/lasyLoadImageas.js';
import { saveFavourites } from '../helpers/saveFavourites.js'


const renderAllProducts = (products, msg, container) => {
  const element = document.querySelector(container);
  element.innerHTML = "";

  if (products.length === 0) {
    if (msg) {
      return element.innerHTML = `<div class="alert alert-info" role="alert">${msg}</div>`;
    }
    if (location.pathname === "/fav.html") {
      const msg = 'Your favourite list is currently empty.';
      element.innerHTML = `<div class="alert alert-info" role="alert">${msg}</div>`;

    } else {
      return element.innerHTML = `<div class="alert alert-info" role="alert">No items available, please try again later.</div>`;
    }

  }

  displayProductCard(products, element)
  saveFavourites();
  lasyLoadImageas();

};

export default renderAllProducts;
