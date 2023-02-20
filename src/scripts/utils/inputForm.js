import RestaurantDbSource from '../data/restaurant-source';

const newReview = async (url, name, review) => {
  const dataInput = {
    id: url.id,
    name,
    review,
  };

  const reviewContent = document.querySelector('.detail__reviewContainer');
  const date = new Date().toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const displayReview = `
  <div class="detail__review">
  <div class="detail__name">
  <h3 class="detail__rName">${name}</h3> 
  <p class="detail__time">${date}</p>
  </div>
  <div class="review__container">
  <p>${review}</p>
  </div>
  </div>
  `;

  const responseInput = await RestaurantDbSource.postNewReview(dataInput);
  console.log(responseInput);
  reviewContent.innerHTML += displayReview;
};

export default newReview;
