import CONFIG from '../../global/config';

const createRestoDetailTemplate = (resto) => `
  <div class="detail">
    <div class="detail__imgContainer">
    <img class="detail__poster" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" />
    </div>
    <div class="detail__info">
    <h2 class="detail__title">${resto.name} - ${resto.city}</h2>
    <p class="detail__location">${resto.address}</p>
    <div class="detail__description">
      <p class="detail__rating">Rating - ${resto.rating}</p>
      <p class="detail__overview">${resto.description}</p>
      <p class="detail__category"> Categories : ${resto.categories.map((category) => `<span> ${category.name}</span>`)}</p>
    </div>
    </div>
  </div>
<br>
<h2 class="headingMain">Review</h2>
<div class="detail__reviewContainer">
  ${resto.customerReviews.map((review) => `
  <div class="detail__review">
  <div class="detail__name">
  <h3 class="detail__rName">${review.name}</h3> 
  <p class="detail__time">${review.date}</p>
  </div>
  <div class="review__container">
  <p>${review.review}</p>
  </div>
  </div>
  `)}
  </div>
  </div>
`;
const createRestoListTemplate = (resto) => `
  <div tabindex="0" class="card">
  <a href="#/resto/${resto.id}" class="card-a-tag">
  <div class="card__img">
  <img tabindex="0"src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}">
  <span class="card__rating"  tabindex="0">${resto.rating} </span>
  </div>
  <div class="card__text"  tabindex="0">
  <p class="card__title" >${resto.name} - ${resto.city}</p>
  <div class="card__paraf">
    <p>${resto.description}</p>
  </div>
  </div>
  </a>
  </div>
`;

export { createRestoListTemplate, createRestoDetailTemplate };
