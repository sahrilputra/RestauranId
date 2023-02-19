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

    if (restaurant.length === 0) {
      restoContainer.innerHTML = '<h2>Favorite page\'s is empty</h2> ';
    }
    restaurant.forEach((resto) => {
      restoContainer.innerHTML += createRestoListTemplate(resto);
    });
  },
};

export default FAVORITE;
