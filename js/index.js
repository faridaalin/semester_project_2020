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
  

  
  //renderFeatured(productResponse);
  saveToSessionStorage(allProducts, productResponse);
})();
