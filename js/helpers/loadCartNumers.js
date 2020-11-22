import {cart} from '../utils/settings.js'
import {getFromLocal} from '../utils/storage.js'

export const loadCartNumbers = () => {
    const currentCartNumers = getFromLocal(cart);
    console.log(currentCartNumers);
    const cartCounter = document.querySelector('.cart-icon span');
 

    let total = 0;

    if (!currentCartNumers) {
        return cartCounter.textContent = total;
        
    }

    total = currentCartNumers.reduce(function (acc, obj) { return acc + obj.qty; }, 0); 

    return  cartCounter.textContent =  total;
  

}

