import { spinner } from '../elements/spinner.js';

export const deleteProduct = (url, token) => {

    const container = document.querySelector('.buttons');
    container.innerHTML += `<button type="button" name="action" value="delete" class="btn btn-danger btn-block product-delete" data-toggle="modal" data-target="#deleteProduct">
    Delete
  </button>`;

  console.log(container);

    const deleteButton = document.querySelector('.btn-delete');

 

    const handleDeleteProduct = () => {
        const options = {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
        spinner('.editDelete-container');
        setTimeout(async () => {
            try {
                const res = await fetch(url, options);
                const deletedItem = await res.json();
                location.href = "/";
            }
            catch (error) {
                console.log(error);
            }
        }, 1000);

    };

    deleteButton.addEventListener('click', handleDeleteProduct)

}