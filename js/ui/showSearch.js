import { allProducts } from '../utils/settings.js';
import { getFromLocal } from '../utils/storage.js';
import renderAllProducts from '../elements/renderAllProducts.js';

export const showSearch = () => {
  const shoes = getFromLocal(allProducts);

  const search = document.querySelector('#search');


  let timeout = null;



  search.addEventListener('keyup',  (e) => {

    clearTimeout(timeout);

    timeout = setTimeout( () => {

      const searchTerm = e.target.value.trim().toLowerCase();


      const filteredSearch = shoes.filter((shoe) => {
        return shoe.title.toLowerCase().includes(searchTerm) || shoe.description.toLowerCase().includes(searchTerm)

      })




      if (filteredSearch.length > 0) {
        renderAllProducts(filteredSearch, ".shop-container");
      } else {
        const msg = `Sorry, we currently don't have ${searchTerm}`;
        renderAllProducts([], msg, ".shop-container");

      };

    }, 1000);
  });

}