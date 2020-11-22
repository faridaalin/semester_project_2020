export const deleteItem = (array, id) => {
    return array.filter((arr) => arr.product.id !== id);
  };