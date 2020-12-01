export const createRatingArray = (product) => {
    let productRating = [];
    const fullStar = `<i class="fa fa-star"></i>`;
    const emptyStar = `<i class="fa fa-star-o"></i>`;
    const RATING_NUMBER = 5;
    
    for (let i = 0; i <  RATING_NUMBER; i++) {
      i <= product.rating ? productRating.push(fullStar) : productRating.push(emptyStar)
    };

    return productRating;
  };