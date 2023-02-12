import RestaurantDbSource from '../../data/restaurant-source';

const restaurant = {
  async render() {
    return `
    <h2>List Restaurant</h2>
    `;
  },

  async afterRender() {
    const resto = await RestaurantDbSource.listingRestaurant();
    console.log(resto);
  },
};

export default restaurant;
