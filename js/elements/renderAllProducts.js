import { displayProductCard } from "../helpers/displayProductCard.js";
import { lasyLoadImageas } from '../helpers/lasyLoadImageas.js';
import { saveFavourites } from '../helpers/saveFavourites.js';


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
  //lasyLoadImageas();

  if ('loading' in HTMLImageElement.prototype) {
    // Native lazy loading

    const images = document.querySelectorAll('img[loading=lazy]');
    console.log('images:', images);
    images.forEach(img => {
      console.log('img.src:', img.src);
      console.log('img.dataset.src:', img.dataset.src);
      img.src = img.dataset.src;
    })
  }

};

export default renderAllProducts;
