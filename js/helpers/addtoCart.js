import { cart } from '../utils/settings.js';
import { saveToLocal, saveCartItemsToLocal, getFromLocal } from '../utils/storage.js';

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

const addSize = () => {

  const select = document.querySelector('.size');

  console.log('Select value:', select.value);
  if(isNaN(select.value)) {
    select.classList.add('is-invalid')
  } else {
    select.classList.remove('is-invalid')
    select.classList.add('is-valid')
  }

  let selectedSize = parseInt( select.value);
  return selectedSize;
  
  select.addEventListener('change', handleSize);

}




export function addToCart(product) {

    const addToCartBtn = document.querySelector('#addToCart');

  
    let localCart = getFromLocal(cart);
  
    if(!localCart)  localCart = [];
  
    addToCartBtn.addEventListener('click', function (e) {
      console.log('Clicked add to cart button');
      addSize();
      addQty();

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




  

