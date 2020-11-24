import renderAllProducts  from "../elements/renderAllProducts.js";


const renderFeatured = (products) => {
  const container = document.querySelector('.featured-container')
  const featuredPropducts = products.filter(product => product.featured);
  
  if(featuredPropducts.length !== 0) {
    renderAllProducts(featuredPropducts, "", container);
  } else {
    document.querySelector('.featured-title').textContent = "Trending";
    renderAllProducts(products, "", container);
  }
 
};

export default renderFeatured;




