import {getFromLocal} from '../utils/storage.js'

export const loadCurrentItems = (tag, container) => {

    const currentItems = getFromLocal(tag);

    const counterContainer = document.querySelector(container);
 
    let total = 0;

    if (!currentItems) {
        return counterContainer.textContent = total;
        
    }

     if(tag === "cart") {
      let qtyArray = [];

      for (let i = 0; i < currentItems.length; i++) {
         qtyArray = currentItems[i].qtySize;
         
      }
    
      total = qtyArray.reduce((acc, obj) => {return acc + obj.qty;}, 0);

         return  counterContainer.textContent =  total;
     }

     if(tag === "favs") {
        return  counterContainer.textContent = currentItems.length;
     }


}

