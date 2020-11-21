import {cart} from '../utils/settings.js'
import {getFromLocal} from '../utils/storage.js'


export const showCartTotal = (key) => {
    const currentCart = getFromLocal(key);
    const cartCounter = document.querySelector('.cart-icon span');

    let total = 0;

    if (!currentCart) {
        return cartCounter.textContent = total;
        
    }

    return cartCounter.textContent =  currentCart.reduce(function (acc, obj) { return acc + obj.qty; }, 0); 
   
}

export const loadCartNumbers = () => {
    const currentCartNumers = getFromLocal(cart);
    const cartCounter = document.querySelector('.cart-icon span');
    console.log(cartCounter);
    if(currentCartNumers) {
        const total = currentCartNumers.reduce(function (acc, obj) { return acc + obj.qty; }, 0); 
  
       

    }

}