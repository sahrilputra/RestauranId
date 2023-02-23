import 'regenerator-runtime';
import RestaurantDbSource from '../../data/restaurant-source';
import UrlParse from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-presenter';

import { createRestoDetailTemplate } from '../templates/template-creator';
import Loader from './loaders';
import newReview from '../../utils/inputForm';
import FavoriteRestoIdb from '../../data/favorite-resto-idb';

const Detail = {
  async render() {
    return `
    <div id="loading">
    </div>
    <div id="containerMain">
    <h1 class="headingMain">Restaurant Details</h1>  
    <article class="detail_container"></article>
    <h3 class="headingMain">Give new review</h3>
    <div id="formInput">
    <section>
  <div class="input">
  <form action="#">
    <p for="name">Name</p>
    <input class="input__name" id="name" type="text" placeholder="Name" tabindex="0" aria-label="name" maxlength="12" ><br>
    <p for="description">Description</p>
    <textarea name="review" id="input__review" cols="30" rows="25" aria-label="description" placeholder="Review.."></textarea><br>
    <button type="submit" aria-label="submit" id="input__submit">Submit</button>
  </form>
  </div>
</section>
    </div>
    <div id="likeButtonContainer"></div>
    </div>
    `;
  },

  async afterRender() {
    const url = UrlParse.parseActiveUrlWithoutCombiner();
    const loader = document.querySelector('#loading');
    const mainContainer = document.querySelector('#containerMain');

    mainContainer.style.display = 'none';
    loader.innerHTML = Loader();

    try {
      const resto = await RestaurantDbSource.detailRestaurant(url.id);
      const dataResto = resto.restaurant;

      const restoContainer = document.querySelector('.detail_container');

      restoContainer.innerHTML = createRestoDetailTemplate(resto.restaurant);

      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteResto: FavoriteRestoIdb,
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

      loader.style.display = 'none';
      mainContainer.style.display = 'block';

      // form control
      const submitBtnNewReview = document.querySelector('#input__submit');
      const nameReview = document.querySelector('.input__name');
      const descriptionReview = document.querySelector('#input__review');

      submitBtnNewReview.addEventListener('click', async (e) => {
        e.preventDefault();

        await newReview(url, nameReview.value, descriptionReview.value);
        console.log(nameReview.value);
        console.log(descriptionReview.value);
        // nameReview.value = '';
        // descriptionReview.value = '';
      });
    } catch (err) {
      loader.style.display = 'none';
      mainContainer.style.display = 'block';
      mainContainer.innerHTML = `Error: ${err.message}`;
    }
  },

};

export default Detail;
