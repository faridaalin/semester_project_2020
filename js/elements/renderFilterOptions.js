export const renderFilterCategories = (products) => {
    const custom_select = document.querySelector(".custom_select");
  
    const categories = products.map(product => product.category);
    const categoreisToLoweCase = categories.map(category => category.toLowerCase());
    const unique_categories = [...new Set(categoreisToLoweCase)]

    unique_categories.map(category => {
     const bacToUpperCase = category[0].toUpperCase() + category.slice(1).toLowerCase()
    
      return custom_select.innerHTML +=  `<div class="form-check">
      <input class="form-check-input" type="checkbox" value="${bacToUpperCase}" id="defaultCheck1">
      <label class="form-check-label" for="defaultCheck1">
      ${bacToUpperCase}
      </label>
    </div>`;
     
    });
 
  };
  
export const renderFilterPrice = (products) => {
  const filterPrice = document.querySelector(".filter-price");

    const allPrices = [];

    products.forEach(product => {
      allPrices.push(product.price);
    });

    const minValue = Math.min(...allPrices);
    const maxValue = Math.max(...allPrices);
   
        return filterPrice.innerHTML += ` 
        <div class="d-flex justify-content-between"><small>NOK ${0}</small> <small>NOK ${maxValue}</small></div>
        <input type="range" class="custom-range" min="0" max="${maxValue}" step="100" id="customRange3">`;
     

  };
  