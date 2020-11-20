export const deleteButton = (url, token) => {

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
        try {
            const res = await fetch(url, options);
            const deletedItem = await res.json();
            location.href = "/";

        }


        catch(error) {
            console.log(error);
        }
        
    };

    deleteButton.addEventListener('click', handleDeleteProduct)

}