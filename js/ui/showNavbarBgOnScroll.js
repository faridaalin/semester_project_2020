export const showNavbarBgOnScroll = () => {
    const navbar = document.querySelector('.navbar');
   
        const getWindowScrollY = () => {

            if(location.pathname === "/" || location.pathname === "/home.html") {
                if (window.scrollY > 15) {
                    navbar.classList.add('custom-bg')
        
                } else {
                    navbar.classList.remove('custom-bg')
                }

                const hamburger = document.querySelector('.custom-toggler');
    
                const addBackground = () => {
                    if (window.scrollY > 15 === false) {
                        navbar.classList.toggle('custom-bg')
                    }
            
                }
            
                hamburger.addEventListener('click', addBackground);
                return;
                
            } else {
                if (window.scrollY > 15) {       
                    navbar.style.boxShadow = "rgba(198, 212, 219, 0.86) 2px 2px 13px 0px"
        
                } else {
                    navbar.style.boxShadow = ""
                }

             
            }
           
            
     
        };
    
        window.addEventListener("scroll", getWindowScrollY);
    

   

};