export const renderFilterOptions = (products) => {
    const custom_select = document.querySelector(".custom-select");
  
    const categories = products.map(product => product.category);
    const categoreisToLoweCase = categories.map(category => category.toLowerCase());
    const unique_categories = [...new Set(categoreisToLoweCase)]

    unique_categories.map(category => {
     const bacToUpperCase = category[0].toUpperCase() + category.slice(1).toLowerCase()
    
      return custom_select.innerHTML += `<option value="${bacToUpperCase}">${bacToUpperCase}</option>`;
    });
 
  };
  