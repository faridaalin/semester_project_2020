import renderAllProducts  from "../elements/renderAllProducts.js";


const renderFeatured = (products) => {
  const featuredPropducts = products.filter(product => product.featured);
  
  if(featuredPropducts.length !== 0) {
    renderAllProducts(featuredPropducts, "", '.featured-container');
  } else {
    document.querySelector('.featured-title').textContent = "Trending";
    renderAllProducts(products, "", '.featured-container');
  }
 
};

export default renderFeatured;




