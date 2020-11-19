import { BASE_URL } from "./utils/settings.js";
import renderProductDetail from './elements/renderProductDetail.js'
import { renderNavbar } from "./elements/renderNavbar.js";
import { login } from "./ui/login.js";

login();
renderNavbar();

// Get the querystring
const queryString = window.location.search;

//Parse the querystring
const urlParam = new URLSearchParams(queryString);
const id = urlParam.get("id");

const getSingleProduct = async () => {
  const URL = `${BASE_URL}/products/${id}`;

  try {
      const res = await fetch(URL);
      const product = await res.json();
      renderProductDetail(product)

  }
  catch(error) {
    console.log(error);
  }
};

getSingleProduct();
