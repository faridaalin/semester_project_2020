import { BASE_URL, allProducts } from "./utils/settings.js";
import renderAllProducts from "./elements/renderAllProducts.js";
import { renderNavbar } from "./elements/renderNavbar.js";
import {
  saveToSessionStorage,
  getFromSessionStorage,
} from "./utils/storage.js";
import { spinner } from "./elements/spinner.js";

renderNavbar();

const renderFilterOptions = (products) => {
  const custom_select = document.querySelector(".custom-select");
  products.forEach((product) => {
    custom_select.innerHTML += `<option value="${product.category}">${product.category}</option>`;
  });
};

(() => {
  const alreadyInStorage = getFromSessionStorage(allProducts);

  if (alreadyInStorage) {
    spinner(".shop-container");
    renderFilterOptions(alreadyInStorage);
    setTimeout(() => {
      return renderAllProducts(
        alreadyInStorage,
        "Shop is currently empty",
        ".shop-container"
      );
    }, 1000);


  }

  spinner(".shop-container");

  setTimeout(async () => {
    const URL = `${BASE_URL}/products`;

    try {
      const res = await fetch(URL);
      const products = await res.json();
      saveToSessionStorage(allProducts, products);
      renderAllProducts(products, "Shop is currently empty", ".shop-container");
      renderFilterOptions(products);
    } catch (error) {
      console.log(error);
    }
  }, 1000);
})();
