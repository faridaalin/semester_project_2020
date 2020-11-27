export const createRatingArray = (product) => {
    let productRating = [];
    const fullStar = `<i class="fa fa-star"></i>`;
    const femptyStar = `<i class="fa fa-star-o"></i>`;
    const MAX_RATING = 5;
    
  
    for (let i = 0; i <  MAX_RATING; i++) {
  
      if(i <= product.rating) {

        productRating.push(fullStar)
      } else {
        productRating.push(femptyStar)
      
      }
    
    };

    return productRating;
  };