import renderAllProducts from "../elements/renderAllProducts.js";

export const renderFilterCategories = (products) => {
  const custom_select = document.querySelector(".custom_select");
  custom_select.innerHTML = "";

  const categories = products.map(product => product.category);
  const categoreisToLoweCase = categories.map(category => category.toLowerCase());
  const unique_categories = [...new Set(categoreisToLoweCase)]

  unique_categories.map(category => {
    const bacToUpperCase = category[0].toUpperCase() + category.slice(1).toLowerCase()

    return custom_select.innerHTML += `<div class="form-check">
      <input class="form-check-input" type="checkbox" value="${bacToUpperCase}" id="defaultCheck1">
      <label class="form-check-label" for="defaultCheck1">
      ${bacToUpperCase}
      </label>
    </div>`;

  });

};

const filterByPrice = (products) => {
  const range = document.querySelector('.custom-range');
  const value = document.querySelector('.value');
  
  value.innerHTML = range.value;


  let timeout = null;

  range.addEventListener('input',  (e) => {

    clearTimeout(timeout);

    timeout = setTimeout( () => {

      const value = e.target.value;


      const filteredPrice = products.filter((product) => product.price <= value);

      console.log('Filtered price:', filteredPrice);
      console.log(filteredPrice.length > 0);


      if (filteredPrice.length > 0) {
        renderAllProducts(filteredPrice, "Shop is currently empty", ".shop-container");
      } else {
        const msg = `Sorry, we currently don't have shoes in with the ${value}`;
        renderAllProducts([], msg, ".shop-container");

      };

    }, 1000);
  });
};



export const renderFilterPrice = (products) => {
  const filterPrice = document.querySelector(".filter-price");
  filterPrice.innerHTML = "";

  const allPrices = [];

  products.forEach(product => {
    allPrices.push(product.price);
  });

  const minValue = Math.min(...allPrices);
  const maxValue = Math.max(...allPrices);

        filterPrice.innerHTML += ` 
        <div class="d-flex justify-content-between"><small>0 NOK</small> <small class="value">Price: </small><small>${maxValue} NOK</small></div>
 
        <input type="range" class="custom-range" min="0" max="${maxValue}" value=""  id="customRange3">`;

        filterByPrice(products);
       
};



