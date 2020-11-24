import { BASE_URL, user, userToken } from "../utils/settings.js";
import {  saveToLocal } from "../utils/storage.js";
import { showMessage } from "../helpers/showMessage.js";
import { removeMessage } from "../helpers/removeMessage.js";
import {renderNavbar} from '../elements/renderNavbar.js'
import {validateEmail} from '../helpers/emailValidator.js'

export const register = (e) => {
  const registerBtn = document.querySelector(".registerBtn");

  const handleLogin = (e) => {
    e.preventDefault();
  
    const username = document.querySelector("#registerUsername");
    const password = document.querySelector("#registerPassword");
    const email = document.querySelector("#registerEmail");
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    const emailValue = email.value.trim();

    if (usernameValue.length < 2) {
      username.classList.add("is-invalid");
    } else {
      username.classList.remove("is-invalid");
      username.classList.add("is-valid");
    }
    if (!validateEmail(emailValue)) {
        email.classList.add("is-invalid");
      } else {
        email.classList.remove("is-invalid");
        email.classList.add("is-valid");
      }

    if (passwordValue.length < 8) {
      password.classList.add("is-invalid");
    } else {
      password.classList.remove("is-invalid");
      password.classList.add("is-valid");
    }

    if (usernameValue.length > 2 && passwordValue.length > 7 || validateEmail(email)) {

          
    const username = document.querySelector("#registerUsername");
    const password = document.querySelector("#registerPassword");
    const email = document.querySelector("#registerEmail");

      const registerNewUser =  (userInfo) => {

        console.log(userInfo);
        removeMessage(".message-container");
        const URL = `${BASE_URL}/auth/local/register`;



        const data = {
          username: usernameValue,
          email: emailValue,
          password: passwordValue,
        };
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        };

      

         setTimeout(async () => {
           try {
             const res = await fetch(URL, options);
             const userData = await res.json();
  
  
             if (userData.statusCode === 400) {
               const msg = "Invalid username, email or password";
               showMessage("danger", msg, '.message-container');
               username.classList.add("is-invalid");
               password.classList.add("is-invalid");
               email.classList.add("is-invalid");
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
      
         }, 1000);

       };

      const userInfo= {
        usernameValue,
        emailValue,
        passwordValue
      };

      registerNewUser(userInfo);
    }
  };

  registerBtn.addEventListener("click", handleLogin);
};
