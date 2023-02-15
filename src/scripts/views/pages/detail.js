import RestaurantDbSource from '../../data/restaurant-source';
import UrlParse from '../../routes/url-parser';
import { createRestoDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    <h1 class="headingMain">Restaurant Details</h1>  
    <article class="detail_container"></article>
    `;
  },

  async afterRender() {
    // test
    const url = UrlParse.parseActiveUrlWithoutCombiner();
    const resto = await RestaurantDbSource.detailRestaurant(url.id);
    console.log(resto);
    const restoContainer = document.querySelector('.detail_container');
    restoContainer.innerHTML = createRestoDetailTemplate(resto.restaurant);
  },

};

export default Detail;
