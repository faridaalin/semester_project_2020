import { BASE_URL, allProducts, home } from "./utils/settings.js";
import { showNavbarBgOnScroll } from "./ui/showNavbarBgOnScroll.js";
import renderHeroBanner from "./elements/renderHerobanner.js";
import renderFeatured from "./elements/renderFeatured.js";
import { renderNavbar } from "./elements/renderNavbar.js";
import {saveToSessionStorage} from "./utils/storage.js";
import { editBackgroundImg } from "./elements/renderHerobanner.js";
import { spinner } from "./elements/spinner.js";
import { fectData } from "./helpers/fetcData.js";
import { showMessage } from "./helpers/showMessage.js";
import { removeMessage } from "./helpers/removeMessage.js";

showNavbarBgOnScroll();
renderNavbar();
editBackgroundImg();


const renderGridCategory = (products) => {
  const masonryGrid = document.querySelector('.masonry');
  const getMapFromArray = data =>
  data.reduce((acc, item) => {
    acc[item.category] =  { item };
    return acc;
  }, {});

const modifiedArray =  getMapFromArray(products);

for (const property in modifiedArray) {
  const name = modifiedArray[property].item.category;
  const nameToUpperCase = name[0].toUpperCase() + name.slice(1).toLowerCase();
  const img = modifiedArray[property].item.image_url;
  masonryGrid.innerHTML += `<div class="masonry__item" style="background-image: url(${img});"><span>${nameToUpperCase}</span></div>`
}

};

(async () => {
  removeMessage(".herobanner .message-container");
  removeMessage(".featured-container .message-container");
  

  const homeUrl = `${BASE_URL}/home`;
  const productsUrl = `${BASE_URL}/products`;

  spinner('.featured-container');
 

  const [homeResponse, productResponse] = await Promise.all([
    fectData(homeUrl),
    fectData(productsUrl),
  ]);

  if (!homeResponse || typeof homeResponse === "string") {
    const msg = "Failed to get background image, check for url misspelling.";
    showMessage("danger", msg, ".herobanner .message-container");
    return;
  }

  renderHeroBanner(homeResponse.hero_url);


    if (!productResponse || typeof productResponse === "string") {
      showMessage("danger", result, ".featured-container .message-container");
      saveToSessionStorage(allProducts)
      return;
    }
  
  renderGridCategory(productResponse);
  renderFeatured(productResponse);
  saveToSessionStorage(allProducts, productResponse);
})();
