import {cart} from '../utils/settings.js'
import {getFromLocal} from '../utils/storage.js'
import {getTotalPrice} from './getTotalPrice.js'

export const loadCartNumbers = () => {
    getTotalPrice();
    const currentCartNumers = getFromLocal(cart);
    const cartCounter = document.querySelector('.cart-icon span');
 

    let total = 0;

    if (!currentCartNumers) {
        return cartCounter.textContent = total;
        
    }

    total = currentCartNumers.reduce(function (acc, obj) { return acc + obj.qty; }, 0); 

    return  cartCounter.textContent =  total;


  

}

