export const productDetail = (product) => {
  const details = ` <div class="img-container col-12 col-md-6 d-flex flex-column flex-sm-row-reverse">
  <div class="col col-sm-2 d-flex justify-content-between flex-sm-column order-2 px-0">
 
    <img class="pdp-thumbnail" src="${product.image_url}" alt="" srcset="" />
    <img class="pdp-thumbnail" src="${product.image_url}" alt="" srcset="" />
    <img class="pdp-thumbnail" src="${product.image_url}" alt="" srcset="" />
    <img class="pdp-thumbnail" src="${product.image_url}" alt="" srcset="" />

</div>
<img class="pdp-img col col-sm-10 px-0 pb-4 pb-sm-0" src="${product.image_url}" alt="" srcset="" />
</div>
<div class="col-12 col-md-6 pt-4 mt-4 pt-md-0 mt-md-0">
<div>
  <small class="pb-2">${product.brand}</small>
  <h3 class="pb-2">${product.title}</h3>
  <h5 class="pb-2">NOK ${product.price}</h5>
  <p class="pb-4 mb-4">
    Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus
    ligula. Mauris consequat ornare feugiat.
  </p>
  <div class="checkout d-flex flex-column flex-lg-row">
    <div class="Qty">
      Qty
      <button type="button" class="btn">-</button><span>1</span><button type="button" class="btn">+</button>
    </div>
    <div class="input-group flex-fill mb-4">
      <select class="custom-select h-100" id="inputGroupSelect02">
        <option selected>Choose size</option>
        <option value="40">40</option>
        <option value="42">42</option>
        <option value="43">43</option>
      </select>
      <i class="fa fa-angle-down"></i>
    </div>
  </div>
  <div class="checkout d-flex pt-2">
  <button type="button" id="addToCart" class="btn btn-secondary flex-fill">
    Add to cart
  </button>
</div>

</div>
</div> `;

// document.addEventListener("DOMContentLoaded", () => {
 
//   // const addToCartBtn = document.querySelector('#addToCart');
//   // console.log(addToCartBtn); 
//   console.log('laoded');

// });

if( document.readyState !== 'loading' ) {
  console.log( 'document IS already ready, just execute code here' );
  const addToCartBtn = document.querySelector('#addToCart');
  console.log(addToCartBtn); 
  myInitCode();
} else {
  document.addEventListener('DOMContentLoaded', function () {
      console.log( 'document was NOT ready, place code here' );
      myInitCode();
  });
}

function myInitCode() {
  console.log('Inside function');
}

return details;

};



