import { BASE_URL } from "./utils/settings.js";
import { productDetail } from './components/productDetail.js'
import { renderNavbar } from "./elements/renderNavbar.js";
import { addToCart } from './helpers/addtoCart.js'
import { fectData } from './helpers/fetcData.js';
import { showMessage } from './helpers/showMessage.js';
import { removeMessage } from './helpers/removeMessage.js';
import { showNavbarBgOnScroll } from './ui/showNavbarBgOnScroll.js';
import { spinner } from "./elements/spinner.js";

showNavbarBgOnScroll();
renderNavbar();



// Get the querystring
const queryString = window.location.search;
//Parse the querystring
const urlParam = new URLSearchParams(queryString);
const id = urlParam.get("id");


const setMetaTAgs = (description, title) => {
  console.log(description);
  const metaDescription = document.createElement('meta');
  metaDescription.setAttribute('property', 'og:description');
  metaDescription.content = description;
  document.getElementsByTagName('head')[0].appendChild(metaDescription);

  const metaTitle = document.createElement('meta');
  metaTitle.setAttribute('property', 'og:title');
  metaTitle.content = title;
  document.getElementsByTagName('head')[0].appendChild(metaTitle);

  const twitterTitle = document.createElement('meta');
  twitterTitle.setAttribute('property', 'twitter:title');
  twitterTitle.content = title;
  document.getElementsByTagName('head')[0].appendChild(twitterTitle);

  const twitterDescription = document.createElement('meta');
  twitterDescription.setAttribute('property', 'twitter:description');
  twitterDescription.content = description;
  document.getElementsByTagName('head')[0].appendChild(twitterDescription);
}


(() => {
  removeMessage('.pdp-detail-container .message-container')
  const URL = `${BASE_URL}/products/${id}`;

  spinner('.pdp-detail-container');

  setTimeout(() => {
    fectData(URL).then(result => {
      if (!result || typeof result === 'string') {
        showMessage('danger', result, '.pdp-detail-container .message-container');
        return;

      }
      document.title = result.title;
      const breadcrumb = document.querySelector('.breadcrumb');
      breadcrumb.innerHTML += `<li class="breadcrumb-item active" aria-current="page">${result.title}</li>`;

      setMetaTAgs(result.description, result.title);
      productDetail(result)
      addToCart(result);
    });

  }, 1000);

}
)();










