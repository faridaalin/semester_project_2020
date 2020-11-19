import {productCard} from '../components/productCard.js';


const renderFeatured = (products) => {
  const container = document.querySelector('.featured-container')
  products.forEach(product => {
    if (product.featured) {
      const feauredProduct = productCard(product);
      return container.innerHTML += feauredProduct;

    }

  });
};

export default renderFeatured;




