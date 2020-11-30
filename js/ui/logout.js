import { user, userToken } from "../utils/settings.js";
import {renderNavbar} from '../elements/renderNavbar.js'

export const logout = () => {
  const logoutBtn = document.querySelector(".logout");
  console.log(logoutBtn);
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem(user);
    localStorage.removeItem(userToken);
    location.reload();
    renderNavbar();
  });
};