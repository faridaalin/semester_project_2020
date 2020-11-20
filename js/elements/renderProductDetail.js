import { productDetail } from "../components/productDetail.js";

const renderProductDetail = (product) => {
  const container = document.querySelector(".pdp-detail-container");

  return container.innerHTML = productDetail(product);

  document.addEventListener("DOMContentLoaded", () => {
 
    const addToCartBtn = document.querySelector('#addToCart');
    console.log(addToCartBtn); 
  
  });
};

export default renderProductDetail;
