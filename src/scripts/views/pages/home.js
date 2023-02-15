import RestaurantDbSource from '../../data/restaurant-source';
// import itemCard from '../templates/card';
import { createRestoListTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `

    <h1 class="headingMain">Restaurant List</h1>
    <article id="mainContent" class="dataAppend">
    </article>
    `;
  },

  async afterRender() {
    const data = await RestaurantDbSource.listingRestaurant();
    const listingRestaurant = document.querySelector('#mainContent');
    data.restaurants.forEach((resto) => {
      listingRestaurant.innerHTML += createRestoListTemplate(resto);
    });
  },

};

export default Home;
