import { productCard } from "./components/productCard.js";
import { getFromLocal } from "./utils/storage.js";
import { favs } from "./utils/settings.js";
import renderAllProducts from './elements/renderAllProducts.js';

const savedFavs = getFromLocal(favs) ? getFromLocal(favs) : [];

const container  = document.querySelector('.fav-container');


const renderFavs = () => {


   const msg =  (savedFavs.length === 0) && "You have no items in your favourites list.";
    
    renderAllProducts(savedFavs, msg, '.fav-container');


}

renderFavs();

