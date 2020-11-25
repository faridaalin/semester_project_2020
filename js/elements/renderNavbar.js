import { user, cart, favs } from '../utils/settings.js';
import { getFromLocal } from '../utils/storage.js';
import { logout } from '../ui/logout.js';
import { showSearch } from '../ui/showSearch.js'
import {loadCurrentItems} from '../helpers/loadCurrentItems.js';
import {login} from '../ui/login.js';
import {register} from '../ui/register.js'


export const renderNavbar = () => {

  const innerNav = document.querySelector('.custom-nav');

  const loggedInUser = getFromLocal(user);
  const { pathname } = location;

  let authLink = `<li class="nav-item mb-2">
    <!-- Button trigger modal -->
    <button class="nav-link btn py-0"  data-toggle="modal" data-target="#login">Login</>
  </li>`

  if (loggedInUser) {
    authLink = `
        <li class="nav-item mb-2 ${pathname === "add.html" ? "active" : ""}">
        <a class="nav-link" href="add.html">Add product</a>
      </li>
        <li class="nav-item mb-2">
        <button class="nav-link logout btn py-0">Logout</button>
        
      </li>
      <li class="nav-item mb-2">
      <span>Hi ${loggedInUser.username}</span>
    </li>
      `

    window.addEventListener('DOMContentLoaded', (event) => {
      logout();
    });

  }

      window.addEventListener('DOMContentLoaded', (event) => {
      register();
      login();
      loadCurrentItems(cart, '.cart-icon span');
      loadCurrentItems(favs, '.favs-icon span');
      });


  let searchbar = "";
  if (pathname === "/shop.html") {
    searchbar = `        <li class="nav-item w-75 mr-2 ml-auto">
  <div class="search ml-auto">
    <input class="form-control mr-sm-2" type="search"  id="search" placeholder="Search" aria-label="Search">
    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor"
      xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd"
        d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
      <path fill-rule="evenodd"
        d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
    </svg>

  </div>
</li>`

    document.addEventListener("DOMContentLoaded", () => {
      showSearch()
    });
  }



  return innerNav.innerHTML = `
    <div class="collapse navbar-collapse inner-navbar flex-grow-1 justify-content-md-between pt-5 pt-lg-0" id="navbarSupportedContent">
    <ul class="navbar-nav nav-center justify-content-center ml-auto align-items-baseline">
      <li class="nav-item ${pathname === "/" ? "active" : ""}">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item  ${pathname === "/shop.html" ? "active" : ""} mb-2">
        <a class="nav-link" href="/shop.html">Shop</a>
      </li>
     ${authLink}
    </ul>
  </div>   
  <div class="collapse navbar-collapse inner-navbar flex-grow-1 justify-content-md-between py-4 py-lg-0" id="navbarSupportedContent">
      <ul class="navbar-nav nav-left mr-auto mx-lg-0 ml-lg-auto flex-row justify-content-between align-items-center">
      ${searchbar}

        <li class="nav-item mr-2 favs-icon">
        <a class="" href="/fav.html"><i class="fa fa-heart"></i><span class="counter">0</span></a>
        </li>

        <li class="nav-item cart-icon">
        <a class="" href="/cart.html"> <i class="fa fa-shopping-cart"> <span class="counter">0</span></i></a>
        </li>
      </ul>
    </div>
    `

}