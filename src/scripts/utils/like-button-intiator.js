import FavoriteRestoIdb from '../data/favorite-resto-idb';
import {
  createLikedButtonTemplate,
  createUnlikeButtonTemplate,
} from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, data }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = data.restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    try {
      const { id } = this._restaurant;

      // get resto in indexed db
      const restaurant = await FavoriteRestoIdb.getResto(id);

      if (restaurant) {
        this._renderLike();
      } else {
        this._renderLiked();
      }
    } catch (err) {
      console.error(err);

      throw new Error(err);
    }
  },

  async _renderLike() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.putResto(this._restaurant);
      this._renderButton();
    });
  },

  async _renderLiked() {
    this._likeButtonContainer.innerHTML = createUnlikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.deleteResto(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
