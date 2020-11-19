import { user, userToken } from "../utils/settings.js";
import {renderNavbar} from '../elements/renderNavbar.js'

export const logout = () => {
  const logoutBtn = document.querySelector(".logout");
  logoutBtn.addEventListener("click", () => {
    console.log('click');
    localStorage.removeItem(user);
    localStorage.removeItem(userToken);
    renderNavbar();
  });
};