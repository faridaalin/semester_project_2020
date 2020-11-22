import { cart } from '../utils/settings.js';
import { saveToLocal, saveCartItemsToLocal, getFromLocal } from '../utils/storage.js';

export function addToCart(product) {
    const addToCartBtn = document.querySelector('#addToCart');

  
    let localCart = getFromLocal(cart);
  
    if(!localCart)  localCart = [];
  
    addToCartBtn.addEventListener('click', function (e) {


    const item = localCart.find((item) => item.product.id === product.id);

     
  
      // if (item) {
      //   item.qty += 1;
     
      // } else {
      //   localCart.push({
      //     size: 0,
      //     qty: 1,
      //     product: product,
      //   })
      // }

      // saveCartItemsToLocal(cart, localCart);
    
  
    });
  }


  const size = document.querySelector('.size');

  
  const addQty = () => {
    const increment = document.querySelector('.pluss');
    const decrement = document.querySelector('.minus');
    const qty = document.querySelector('.value');


    let value = 1;
    const handleIncrement = () => {
      qty.textContent = value += 1;
      
    };
    const handleDecrement = () => {
      if(value <= 1) {
        return qty.textContent = value = 1;
      }
      qty.textContent = value -= 1;

    };


    increment.addEventListener('click', handleIncrement);
    decrement.addEventListener('click', handleDecrement);  

  }


addQty();

