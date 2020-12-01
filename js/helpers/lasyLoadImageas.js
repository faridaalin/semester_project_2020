export const lasyLoadImageas = () => {
    const images = document.querySelectorAll('[data-src]');
    const imgOptions = {
      treshold: 1,
    };
  
    const preloadImage = (img) => {
      const src = img.getAttribute('data-src');
      if(!src) {
        return;
      }
      img.src = src;
    }
  
    const imgOberver = new IntersectionObserver((entries, imgOberver) => {
      entries.forEach(entry => {
          if(!entry.isIntersecting) {
            return;
          } else {
            preloadImage(entry.target);
            imgOberver.unobserve(entry.target);
          }
      })
  
    }, imgOptions);
  
    images.forEach(image => {
      imgOberver.observe(image);
    })
   
  }
  