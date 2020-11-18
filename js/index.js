import {BASE_URL} from './utils/settings.js'
import  { user, userToken, saveToLocal} from './utils/settings.js';
import { showNavbarOnScroll } from './ui/showNavbarOnScroll.js';
import renderHeroBanner from './elements/renderHerobanner.js';
import renderFeatured from './elements/renderFeatured.js'

showNavbarOnScroll();


( async () => {
    const URL = `${BASE_URL}/home`;
    try {
        const res = await fetch(URL);
        const banner = await res.json();
        renderHeroBanner(banner.hero_url)
    }

    catch(error) {
        console.log(error)
    }
})();

( async () => {
    const URL = `${BASE_URL}/products`;

    try {
        const res = await fetch(URL);
        const products = await res.json();
        renderFeatured(products)
    }

    catch(error) {
        console.log(error)
    }
})();





const loginBtn = document.querySelector('.loginBtn');

const handleLogin = (e) => {
    e.preventDefault();

    // validation
    const username = document.querySelector('#username');
    const password = document.querySelector('#password');
    const usernameValue = document.querySelector('#username').value.trim();
    const passwordValue = document.querySelector('#password').value.trim();
    const errorUsername = document.querySelector('.feedback-username');
    const errorPassword = document.querySelector('.feedback-password');

    if(usernameValue.length < 2) {
        username.classList.add('is-invalid');

    } else {
        username.classList.remove('is-invalid');
        username.classList.add('is-valid');
    }
    if(passwordValue.length < 8) {
        password.classList.add('is-invalid');

    } else {
        password.classList.remove('is-invalid');
        password.classList.add('is-valid');
    }


 
    if(usernameValue.length > 2 && passwordValue.length > 7) {
        const authUser =  async (username, password) => {
            const URL = `${BASE_URL}/auth/local`;
            console.log(username);
            console.log(password);
            const data = {
                identifier: username,
                password: password,
            };
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", 
                },
                body: JSON.stringify(data) 
            }
            

            try {
                const res = await fetch(URL, options);
                const userData = await res.json();
                console.log(userData);
                saveToLocal(user, userData.user)
                saveToLocal(userToken, userData.jwt)

            }
            catch(error) {
                console.log(error);
            }


        }


        authUser(usernameValue, passwordValue)
    }

}



loginBtn.addEventListener('submit', handleLogin)
loginBtn.addEventListener('click', handleLogin)





