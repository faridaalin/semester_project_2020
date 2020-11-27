import renderAllProducts  from "../elements/renderAllProducts.js";
import {featuredCard} from '../components/featuredCard.js';
import {saveFavourites} from './renderAllProducts.js';


const splitArray = (array, value) => {
  let finalArray = [];
  
  for (let i = 0; i < array.length; i+= value) {
    const element = array[i];
    finalArray.push(array.slice(i, value + i));

    
  }

    return finalArray;
}



const displayFeaturedProducts = (featuredPropducts) => {
  const container = document.querySelector('.carousel-inner');



  const newArr = splitArray(featuredPropducts, 4);

  newArr.forEach((element, index) => {
  
  container.innerHTML += `<div class="carousel-item ${index === 0 && 'active'}">
  <div class="row">
    ${element.map(item => {
      return `<div class="col-3">${featuredCard(item)}</div>`
    }).join('')}

  </div>
</div>`;
saveFavourites();

 });
};


const renderFeatured = (products) => {
  const featuredPropducts = products.filter(product => product.featured);

  if(featuredPropducts.length !== 0) {
    displayFeaturedProducts(featuredPropducts);
  } else {
    document.querySelector('.featured-title').textContent = "Trending";
    renderAllProducts(products, "", '.featured-container');
  }
 
};

export default renderFeatured;





