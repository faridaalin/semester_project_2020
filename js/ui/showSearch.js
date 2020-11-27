import { allProducts } from '../utils/settings.js';
import { getFromSessionStorage } from '../utils/storage.js';
import renderAllProducts from '../elements/renderAllProducts.js';

export const showSearch = () => {
  const shoes = getFromSessionStorage(allProducts);

  const search = document.querySelector('#search');


  let timeout = null;



  search.addEventListener('input',  (e) => {

    clearTimeout(timeout);

    timeout = setTimeout( () => {

      const searchTerm = e.target.value.trim().toLowerCase();
      console.log(searchTerm);

      const filteredSearch = shoes.filter((shoe) => {
        return shoe.title.toLowerCase().includes(searchTerm) || shoe.description.toLowerCase().includes(searchTerm)

      })


      if (filteredSearch.length > 0) {
        renderAllProducts(filteredSearch, "Shop is currently empty", ".shop-container");
      } else {
        const msg = `Sorry, we currently don't have ${searchTerm}`;
        renderAllProducts([], msg, ".shop-container");

      };

    }, 1000);
  });

}