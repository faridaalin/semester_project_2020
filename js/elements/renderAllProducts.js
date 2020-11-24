import { displayProductCard } from "../helpers/displayProductCard.js";
import { showMessage } from '../helpers/showMessage.js';
import { removeMessage } from '../helpers/removeMessage.js';
import { favs, allProducts } from '../utils/settings.js';
import {getFromSessionStorage, getFromLocal, saveToLocal } from '../utils/storage.js';
import {renderFilterOptions} from './renderFilterOptions.js';




const saveFavourites = () => {
  const favButtonsNode = document.querySelectorAll('.fav');
  const favButtonsArr = [...favButtonsNode];

  for (let i = 0; i < favButtonsArr.length; i++) {
    const saveToFavList = (e) => {

      const id = parseInt(e.target.dataset.id);
      const { classList } = e.target;
      classList.toggle("fa-heart-o");
      classList.toggle("fa-heart");

      const products = getFromSessionStorage(allProducts);
      let favsList = getFromLocal(favs);
      const newFav = products.find(item => id === item.id);


      if (!favsList) {
        favsList = [];
        favsList.push(newFav);
        saveToLocal(favs, favsList);

      } else {
        const inFavsListAlready = favsList.find(item => item.id === id);


        if (!inFavsListAlready) {
          favsList.push(newFav)
          return saveToLocal(favs, favsList);
        };

        const filteredFavs = favsList.filter(item => item.id !== newFav.id);
        return saveToLocal(favs, filteredFavs);

      }


    };

    favButtonsArr[i].addEventListener('click', saveToFavList);
  }



};


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

  // if(location.pathname === '/shop.html') {
  //   renderFilterOptions(products);
  // }
 
};

export default renderAllProducts;
