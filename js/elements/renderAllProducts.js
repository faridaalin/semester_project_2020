import { displayProductCard } from "../helpers/displayProductCard.js";
import { showMessage } from '../helpers/showMessage.js';
import { removeMessage } from '../helpers/removeMessage.js';
import { favs, allProducts } from '../utils/settings.js';
import { getFromLocal, saveToLocal } from '../utils/storage.js';


const saveFavourites = () => {
  const favButtonsNode = document.querySelectorAll('.fav');
  const favButtonsArr = [...favButtonsNode];
  const products = getFromLocal(allProducts);
  const favsList = getFromLocal(favs) ? getFromLocal(favs) : [];


  for (let i = 0; i < favButtonsArr.length; i++) {
    const saveToFavList = (e) => {
      const id = parseInt(e.target.dataset.id);
      const { classList } = e.target;
      classList.toggle("fa-heart-o");
      classList.toggle("fa-heart");

      const inFavsListAlready = favsList.find(item => item.id === id);

      if (!inFavsListAlready) {
        console.log('Product does not exist - ADD to Array');
          const newFav = products.find(item => id === item.id);
          favsList.push(newFav);
          return saveToLocal(favs, favsList);
     
      } else {
       const filteredFavs = favsList.filter(item => item.id !== id);
       return saveToLocal(favs, filteredFavs);

      }

    };

    favButtonsArr[i].addEventListener('click', saveToFavList);
  }



};

const renderAllProducts = (products, msg) => {

  const container = document.querySelector(".shop-container");
  container.innerHTML = "";
  removeMessage("#pdpMsg")

  if (msg) {
    return showMessage("info", msg, "#pdpMsg");
  }
  displayProductCard(products, container)
  saveFavourites();
};

export default renderAllProducts;
