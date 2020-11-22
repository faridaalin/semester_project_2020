export const deleteItemFromArray = (array, id) => {
    return array.filter((arr) => arr.product.id !== id);
  };