import { productCard } from '../components/productCard.js';


const renderFeatured = (products) => {
  const container = document.querySelector('.featured-container')
  const featuredPropducts = products.filter(product => product.featured);
  if(featuredPropducts.length !== 0) {
    featuredPropducts.map(product => container.innerHTML += productCard(product))
  } else {
    document.querySelector('.featured-title').textContent = "Trending";
    products.map(product => container.innerHTML += productCard(product));

  }
 

};

export default renderFeatured;




