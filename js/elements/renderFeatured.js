import { displayProductCard } from "../helpers/displayProductCard.js";


const renderFeatured = (products) => {
  const container = document.querySelector('.featured-container')
  const featuredPropducts = products.filter(product => product.featured);
  
  if(featuredPropducts.length !== 0) {
    displayProductCard(featuredPropducts, container);
  } else {
    document.querySelector('.featured-title').textContent = "Trending";
    displayProductCard(products, container);
  }
 
};

export default renderFeatured;




