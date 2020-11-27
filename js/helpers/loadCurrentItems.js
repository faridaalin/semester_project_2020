import {getFromLocal} from '../utils/storage.js'

export const loadCurrentItems = (tag, container) => {

    const currentItems = getFromLocal(tag);


    const counterContainer = document.querySelector(container);
 
    let total = 0;

    if (!currentItems) {
        return counterContainer.textContent = total;
        
    }

     if(tag === "cart") {

      currentItems.forEach(element => {
         let sum = 0;
         element.qtySize.forEach((item) => {
            sum += (item.qty + item.qty);
         })

         total = sum;

         
      });
   
         return  counterContainer.textContent =  total;
     } 

     if(tag === "favs") {  
        return  counterContainer.textContent = currentItems.length;
     }

}

