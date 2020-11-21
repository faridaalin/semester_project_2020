 const productImg = (product) => {
  const imgContainer = document.querySelector('.img-container');

  return imgContainer.innerHTML = `<div class="col col-sm-2 d-flex justify-content-between flex-sm-column order-2 px-0">
  <img class="pdp-thumbnail" src="${product.image_url}" alt="" srcset="" />
  <img class="pdp-thumbnail" src="${product.image_url}" alt="" srcset="" />
  <img class="pdp-thumbnail" src="${product.image_url}" alt="" srcset="" />
  <img class="pdp-thumbnail" src="${product.image_url}" alt="" srcset="" />
  </div>
  <img class="pdp-img col col-sm-10 px-0 pb-4 pb-sm-0" src="${product.image_url}" alt="" srcset="" />`;
};

 const productContent = (product) => {
  const contentContainer = document.querySelector('.content-container');
  
  return contentContainer.innerHTML = `
  <small class="pb-2">${product.brand}</small>
  <h3 class="pb-2">${product.title}</h3>
  <h5 class="pb-2">NOK ${product.price}</h5>
  <p class="pb-4 mb-4">
  Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus
  ligula. Mauris consequat ornare feugiat.
  </p>`;
 }

export const productDetail = (product) => {
  productImg(product);
  productContent(product);

}



