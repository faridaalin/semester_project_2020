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
        renderAllProducts(filteredSearch)
      } else {
        const msg = `Sorry, we currently don't have ${searchTerm}`;
        renderAllProducts([], msg);

      };

    }, 1000);
  });




  // const handleSearch = (e) => {


  //   setTimeout(() => {

  //     const searchTerm = e.target.value.trim().toLowerCase();

  //     let searchedShoes = [];

  //     const filteredSearch = shoes.filter((shoe) => {
  //         return shoe.title.toLowerCase().includes(searchTerm) || shoe.description.toLowerCase().includes(searchTerm)

  //     })

  //     console.log(filteredSearch);


  //     if (filteredSearch.length > 0) {
  //         renderAllProducts(filteredSearch)
  //       } else {
  //         const msg = `Sorry, we currently don't have ${searchTerm}`; 
  //         renderAllProducts([], msg);

  //       };

  //   }, 500);

  // };
  // search.addEventListener('input', handleSearch)

}