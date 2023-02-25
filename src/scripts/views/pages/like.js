import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createRestoListTemplate } from '../templates/template-creator';

const FAVORITE = {

  async render() {
    return `
    <div id="query">
    <h1 class="headingMain">Favorite Restaurant</h1>
    <article id="fav-resto" class="dataAppend">
    
    </article>
    </div>
    `;
  },

  async afterRender() {
    const restaurant = await FavoriteRestoIdb.getAllResto();
    const restoContainer = document.querySelector('#fav-resto');

    if (restaurant.length === 0) {
      restoContainer.innerHTML = `
      <div id="notFound"> 
      <h1> Tidak ada restaurant untuk ditampilkan </h1> 
      </div>`;
    }
    restaurant.forEach((resto) => {
      restoContainer.innerHTML += createRestoListTemplate(resto);
    });
  },
};

export default FAVORITE;
