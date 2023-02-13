import API_ENDPOINT from '../global/api-endpoints';

class RestaurantDbSource {
  static async listingRestaurant() {
    const response = await fetch(API_ENDPOINT.LIST_RESTAURANT);
    return response.json();
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}
export default RestaurantDbSource;
