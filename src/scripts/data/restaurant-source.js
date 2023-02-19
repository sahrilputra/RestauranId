import API_ENDPOINT from '../global/api-endpoints';
import CONFIG from '../global/config';

class RestaurantDbSource {
  static async listingRestaurant() {
    const response = await fetch(API_ENDPOINT.LIST_RESTAURANT);
    return response.json();
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }

  static async postNewReview(data) {
    const response = await fetch(API_ENDPOINT.POTS_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG.KEY,
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }
}
export default RestaurantDbSource;
