import RestaurantDbSource from '../../data/restaurant-source';
// import itemCard from '../templates/card';
import { createRestoListTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <article>
    <h1 class="headingMain">Restaurant List</h1>
    <p class="headingText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, blanditiis?</p>
    <article id="mainContent">
      <div class="dataAppend" id="card">
      </div>
    </article>
    `;
  },

  async afterRender() {
    const data = await RestaurantDbSource.listingRestaurant();
    const listingRestaurant = document.querySelector('.dataAppend');
    data.restaurants.forEach((resto) => {
      console.log(resto);
      listingRestaurant.innerHTML += createRestoListTemplate(resto);
    });

    // try {
    //   const data = await RestaurantDbSource.listingRestaurant();
    //   console.log(data.restaurants);
    //   data.restaurants.forEach((resto) => {
    //     listingRestaurant.innerHTML += createRestoListTemplate(resto);
    //   });
    // } catch (err) {
    //   console.log(err);
    // }
  },

};

export default Home;
