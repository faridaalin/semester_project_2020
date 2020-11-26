import renderAllProducts  from "../elements/renderAllProducts.js";

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

console.log(container);

  const newArr = splitArray(featuredPropducts, 4);

  newArr.forEach((element, index) => {
    console.log(element);
  container.innerHTML += `<div class="carousel-item ${index === 0 && 'active'}">
  <div class="row">
    ${element.map(item => {
      console.log(item.image_url);
      return `<div class="col-3">
      <img class="d-block w-100" src="${item.image_url}" alt="${item.alt_text}">
    </div>`
    }).join('')}

  </div>
</div>`;

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





