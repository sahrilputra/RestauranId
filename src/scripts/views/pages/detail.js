import RestaurantDbSource from '../../data/restaurant-source';
import UrlParse from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-intiator';

import { createRestoDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    <h1 class="headingMain">Restaurant Details</h1>  
    <article class="detail_container"></article>
    <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParse.parseActiveUrlWithoutCombiner();
    const resto = await RestaurantDbSource.detailRestaurant(url.id);
    const dataResto = resto.restaurant;

    const restoContainer = document.querySelector('.detail_container');

    restoContainer.innerHTML = createRestoDetailTemplate(resto.restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: dataResto.id,
        name: dataResto.name,
        city: dataResto.city,
        rating: dataResto.rating,
        address: dataResto.address,
        pictureId: dataResto.pictureId,
        description: dataResto.description,
      },
    });
  },

};

export default Detail;
