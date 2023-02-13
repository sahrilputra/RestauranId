import RestaurantDbSource from '../../data/restaurant-source';
import UrlParse from '../../routes/url-parser';
import { createRestoDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    <article>
    <h1 class="headingMain">Restaurant Details</h1>
    <p class="headingText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, blanditiis?</p>
    <article id="mainContent">
      <div class="dataAppend" id="card">
      </div>
    </article>
    `;
  },

  async afterRender() {
    // test
    const url = UrlParse.parseActiveUrlWithoutCombiner();
    const resto = await RestaurantDbSource.detailRestaurant(url.id);
    console.log(resto);
    const restoContainer = document.querySelector('.dataAppend');
    restoContainer.innerHTML += createRestoDetailTemplate(resto.restaurant);
  },

};

export default Detail;
