      
          const validateUser = (userData) => {
            if(!userData || typeof userData === 'string') {
              const msg = "username or email already exist";
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
          }
   