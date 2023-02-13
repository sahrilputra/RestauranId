import CONFIG from '../../global/config';

const createRestoDetailTemplate = (resto) => `
  <h2 class="movie__title">${resto.name}</h2>
  <img class="movie__poster" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" />
  <div class="movie__info">
  <h3>Information</h3>
    <h4>Tagline</h4>
    <p>${resto.city}</p>
    <h4>Rating</h4>
    <p>${resto.rating}</p>
  </div>
  <div class="movie__overview">
    <h3>Overview</h3>
    <p>${resto.description}</p>
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
