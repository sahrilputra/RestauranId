import RestaurantDbSource from '../../data/restaurant-source';
// import itemCard from '../templates/card';
import { createRestoListTemplate } from '../templates/template-creator';
import Loader from './loaders';

const Home = {
  async render() {
    return `
  <div class="HomeContainer">
    <div id="loading">
    </div>
    <div id="containerMain">
    <h1 class="headingMain">Restaurant List</h1>
    <article id="mainContent" class="dataAppend">
    </article>
    </div>
    </div>
    `;
  },

  async afterRender() {
    const loader = document.querySelector('#loading');
    const listingRestaurant = document.querySelector('#mainContent');
    const mainContainer = document.querySelector('#containerMain');
    mainContainer.style.display = 'none';
    loader.innerHTML = Loader();

    try {
      const data = await RestaurantDbSource.listingRestaurant();
      console.log(data);
      data.restaurants.forEach((resto) => {
        listingRestaurant.innerHTML += createRestoListTemplate(resto);
      });

      loader.style.display = 'none';
      mainContainer.style.display = 'grid';
    } catch (err) {
      console.log(err);

      // listingRestaurant.style.display = 'block';
      loader.style.display = 'none';
      listingRestaurant.innerHTML = `Error: ${err.message}`;
    }
  },

};

export default Home;
