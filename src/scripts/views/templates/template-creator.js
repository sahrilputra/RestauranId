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
<h2 class="headingMain">Menu's</h2>
  <div class="menu">
  <div class="menu__food">
  <h3>Food's</h3>
  ${resto.menus.foods.map((food, i) => `
  <p class="menu__list">${i + 1}. ${food.name}</p>
  `).join('')}
    </div>

    <div class="menu__drink">
    <h3>Drink's</h3>
  ${resto.menus.drinks.map(
    (drinks, i) => `
  <p class="menu__list">${i + 1}. ${drinks.name}</p>
  `,
  )
    .join('')}
    </div>  
  </div>

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
  `).join('')}
  </div>
  
  </div>
`;
const createRestoListTemplate = (resto) => `
  <div tabindex="0" class="card">
  <a href="#/resto/${resto.id}">
  <div class="card__img">
  <picture>
  <source media="(max-width:680px)" type="image/jpeg" data-srcset="${CONFIG.BASE_IMAGE_URL + resto.pictureId}">
  <source type="image/jpeg" data-srcset="${CONFIG.BASE_IMAGE_URL + resto.pictureId}">
  <img class="lazyload" tabindex="0" min-width="380px" height="180px" data-src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}">
  </picture>
  <br>
  <span class="card__rating"  tabindex="0">${resto.rating} </span>
  </div>
  <div class="card__text"  tabindex="0">
  <p class="card__title" >  ${resto.name} - ${resto.city} </p>
  <div class="card__paraf">
    <p>${resto.description}</p>
  </div>
  </div>
  </a>
  </div>
`;

const createUnlikeMovieButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
  <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart with" aria-hidden="true"></i>
  </button>
`;

const createInputForm = () => `
<section>
<div class="input">
  <form id="fromAction" action="#">
    <p for="name">Name</p>
    <input class="input__name" id="name" type="text" placeholder="Name" tabindex="0" aria-label="name" maxlength="12" ><br>
    <p for="description">Description</p>
    <textarea name="review" id="input__review" cols="30" rows="25" aria-label="description" placeholder="Review.."></textarea><br>
    <button type="submit" aria-label="submit">Submit</button>
  </form>
</div>
</section>
`;

export {
  createRestoListTemplate,
  createRestoDetailTemplate,
  createLikedButtonTemplate,
  createUnlikeMovieButtonTemplate,
  createInputForm,
};
