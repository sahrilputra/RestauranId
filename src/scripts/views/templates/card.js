const itemCard = (resto) => {
  // eslint-disable-next-line no-unused-expressions
  `
  <div tabindex="0" class="card">
  <div class="card__img">
  <img tabindex="0"src="${resto.pictureId}" alt="${resto.name}">
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
};

export default itemCard;
