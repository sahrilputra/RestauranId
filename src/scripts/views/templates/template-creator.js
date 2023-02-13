import CONFIG from '../../global/config';

const createMovieDetailTemplate = (movie) => `
  <h2 class="movie__title">${movie.title}</h2>
  <img class="movie__poster" src="${CONFIG.BASE_IMAGE_URL + movie.poster_path}" alt="${movie.title}" />
  <div class="movie__info">
  <h3>Information</h3>
    <h4>Tagline</h4>
    <p>${movie.tagline}</p>
    <h4>Release Date</h4>
    <p>${movie.release_date}</p>
    <h4>Duration</h4>
    <p>${movie.runtime} minutes</p>
    <h4>Rating</h4>
    <p>${movie.vote_average}</p>
  </div>
  <div class="movie__overview">
    <h3>Overview</h3>
    <p>${movie.overview}</p>
  </div>
`;
const createRestoListTemplate = (resto) => `
  <div tabindex="0" class="card">
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
  </div>
`;

export { createRestoListTemplate, createMovieDetailTemplate };
