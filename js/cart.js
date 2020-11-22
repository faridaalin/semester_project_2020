import {cart} from './utils/settings.js';
import {getFromLocal} from './utils/storage.js';
import {getTotalPrice} from './helpers/getTotalPrice.js';


const showCartItems = () => {
const cartItems = getFromLocal(cart);
let itemContainer = document.querySelector('.cart-detail');
let checkoutContainer = document.querySelector('.checkout-container');



if(!cartItems) {
    itemContainer.innerHTML = `<div class="alert alert-info" role="alert">
    Your cart is currently empty.
  </div>`;
  checkoutContainer.style.display = "none";
  return;

}

cartItems.map((item) => {
    console.log(item);
    itemContainer.innerHTML += `
     
     <div class="bag-container d-flex pb-4">
     <div class="bag-img embed-responsive embed-responsive-4by3" style="background-image: url(${item.product.image_url})">
     </div>
     <div class="col-9 col-md-10">
       <div class="grid--cart">
       <p class="light-text mb-1">${item.product.brand}</p>
       <div class="d-md-flex justify-content-between">
         <div class="pb-3 flex-grow-1 pb-md-0 align-text-bottom ">
           <p class="medium-text">${item.product.title}</p>
         </div>
         <div class="d-flex flex-wrap justify-content-between align-items-center flex-grow-1">
           <div>
             <p class="light-text flex-grow-1 align-text-bottom">Size ${item.size}</p>
           </div>
           <div>
             <p class="light-text flex-grow-1 align-text-bottom">Qty ${item.qty}</p>
           </div>
           <div>
             <p class="large-text flex-grow-1 align-text-bottom">NOK ${item.product.price}</p>
            </div>
           <div>
             <p class="large-text flex-grow-1 align-text-bottom">Total: ${item.product.price * item.qty} </p>
            </div>
             </div>
           </div>
       </div>
     </div>

   </div>`;

})


checkoutContainer.innerHTML = `<div class="checkout-container ml-auto pt-4 pb-5 px-4">
<h3 class="pt-2 pb-2">ORDER SUMMARY</h3>
<div class="delivery pt-2 pb-4 d-flex justify-content-between align-items-center">
  <span>Delivery</span><span>FREE</span></div>
<div class="total pt-2 pb-4 d-flex justify-content-between align-items-center"><span>Total sum</span><span>NOK ${getTotalPrice()}</span></div>
<button type="button" class="btn btn-secondary btn-block">Checkout</button>
</div>`
}
showCartItems();



