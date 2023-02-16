import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createRestoListTemplate } from '../templates/template-creator';

const FAVORITE = {

  async render() {
    return `
    <h1 class="headingMain">Favorite Restaurant</h1>
    <article id="mainContent" class="dataAppend">
    </article>
    `;
  },

  async afterRender() {
    const restaurant = await FavoriteRestoIdb.getAllResto();
    const restoContainer = document.querySelector('#mainContent');

    restaurant.forEach((resto) => {
      restoContainer.innerHTML += createRestoListTemplate(resto);
    });
  },
};

export default FAVORITE;
