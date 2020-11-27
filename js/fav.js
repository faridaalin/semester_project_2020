import { getFromLocal } from "./utils/storage.js";
import { favs } from "./utils/settings.js";
import renderAllProducts from './elements/renderAllProducts.js';
import { renderNavbar } from "./elements/renderNavbar.js";
import {showNavbarBgOnScroll} from './ui/showNavbarBgOnScroll.js';

showNavbarBgOnScroll();
renderNavbar();

export const renderFavs = () => {
    const savedFavs = getFromLocal(favs) ? getFromLocal(favs) : [];
    const container = document.querySelector('.fav-container');

    const msg = (savedFavs.length === 0) && "You have no items in your favourites list.";

    renderAllProducts(savedFavs, msg, '.fav-container');


}

renderFavs();

