import RestaurantDbSource from '../../data/restaurant-source';
import UrlParse from '../../routes/url-parser';

import { createLikeButtonTemplate, createRestoDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    <h1 class="headingMain">Restaurant Details</h1>  
    <article class="detail_container"></article>
    <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    // test
    const url = UrlParse.parseActiveUrlWithoutCombiner();
    const resto = await RestaurantDbSource.detailRestaurant(url.id);
    const restoContainer = document.querySelector('.detail_container');
    const likeButtonContainer = document.querySelector('#likeButtonContainer');
    likeButtonContainer.innerHTML = createLikeButtonTemplate();

    restoContainer.innerHTML = createRestoDetailTemplate(resto.restaurant);

    // LikeButtonInitiator.init({
    //   likeButtonContainer: document.querySelector('#likeButtonContainer'),
    //   resto,
    // });
  },

};

export default Detail;
