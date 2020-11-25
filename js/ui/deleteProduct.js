import { spinner } from '../elements/spinner.js';
import {showMessage} from '../helpers/showMessage.js';
import {removeMessage} from '../helpers/removeMessage.js';
import {fectData} from '../helpers/fetcData.js'


export const deleteProduct = (url, token) => {

    const container = document.querySelector('.buttons');
    container.innerHTML += `<button type="button" name="action" value="delete" class="btn btn-danger btn-block product-delete" data-toggle="modal" data-target="#deleteProduct">
    Delete
  </button>`;

    const deleteButton = document.querySelector('.btn-delete');

 

    const handleDeleteProduct = async () => {
        const options = {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
 
        fectData(url, options).then(result => {
            if(!result || typeof result === 'string') {
              showMessage('danger', result, '#msg');
              return;
            
               }
               console.log(result);

               
               if(result.created_at) {
                const msg = `${result.title} has been deleted`;
                showMessage('success', msg, '#msg')
            }
         
                location.href = "/";
        
          });
       


    };

    deleteButton.addEventListener('click', handleDeleteProduct)

}