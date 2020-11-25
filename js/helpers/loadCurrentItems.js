import {getFromLocal} from '../utils/storage.js'

export const loadCurrentItems = (tag, container) => {

    const currentItems = getFromLocal(tag);

    const counterContainer = document.querySelector(container);
 
    let total = 0;

    if (!currentItems) {
        return counterContainer.textContent = total;
        
    }

    console.log(currentItems);

    if(tag === "cart") {
      total = currentItems.reduce(function (acc, obj) { 
         //  console.log('acc', acc) 
         //  console.log('obj', obj) 
       }, 0); 
         
      return  counterContainer.textContent =  total;
   }


   //   if(tag === "cart") {
   //      total = currentItems.reduce(function (acc, obj) { 
   //          console.log('acc', acc) 
   //          console.log('obj', obj.reduce((acc, item) => console.log(acc, item))) 
   //       }, 0); 
           
   //      return  counterContainer.textContent =  total;
   //   }

 

     if(tag === "favs") {
        return  counterContainer.textContent = currentItems.length;
     }


}

