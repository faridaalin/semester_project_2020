import { BASE_URL } from "../utils/settings.js";
import { user, userToken} from "../utils/settings.js";
import {  saveToLocal } from "../utils/storage.js";
import { showMessage } from "../helpers/showMessage.js";
import { removeMessage } from "../helpers/removeMessage.js";
import {renderNavbar} from '../elements/renderNavbar.js'

export const login = (e) => {
  const loginBtn = document.querySelector(".loginBtn");

  const handleLogin = (e) => {
    e.preventDefault();


  
    const username = document.querySelector("#username");
    const password = document.querySelector("#password");
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    if (usernameValue.length < 2) {
      username.classList.add("is-invalid");
    } else {
      username.classList.remove("is-invalid");
      username.classList.add("is-valid");
    }
    if (passwordValue.length < 8) {
      password.classList.add("is-invalid");
    } else {
      password.classList.remove("is-invalid");
      password.classList.add("is-valid");
    }

    if (usernameValue.length > 2 && passwordValue.length > 7) {
      const authUser = async (username, password) => {
        removeMessage(".message-container");
        const URL = `${BASE_URL}/auth/local`;

        const usernameValue = username.value.trim();
        const passwordValue = password.value.trim();


        const data = {
          identifier: usernameValue,
          password: passwordValue,
        };
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        };

        try {
          const res = await fetch(URL, options);
          const userData = await res.json();


          if (userData.statusCode === 400) {
            const msg = "Invalid username or password";
            showMessage("danger", msg, '.message-container');
            username.classList.add("is-invalid");
            password.classList.add("is-invalid");
            return;
          }

          saveToLocal(user, userData.user);
          saveToLocal(userToken, userData.jwt);

          const modal = document.querySelector(".modal");
          modal.classList.remove("show");
          modal.classList.add("hide");

          location.reload();
          renderNavbar()
        } catch (error) {
          console.log(error);
        }
      };

      authUser(username, password);
    }
  };

  loginBtn.addEventListener("click", handleLogin);
};
