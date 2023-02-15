import FavoriteRestoIdb from '../data/favorite-resto-idb';
import { createLikedButtonTemplate, createUnlikeButtonTemplate } from '../views/templates/template-creator';

const LikeButtonInitiator = {

  async init({
    likeButtonContainer,
    resto,
  }) {
    this._likeButtonContainer = likeButtonContainer;
    this._resto = resto;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._resto;

    if (await this._isRestoExist(id)) {
      this._renderLiked();
    } else {
      this._renderUnlike();
    }
  },

  async _isRestoExist(id) {
    const resto = await FavoriteRestoIdb.getResto(id);
    return !!resto;
  },

  async _renderUnlike() {
    this._likeButtonContainer.innerHTML = createUnlikeButtonTemplate();

    const unlikeButton = document.querySelector('#likedButton');
    unlikeButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.putResto(this._resto);
      this._renderButton();
    });
  },

  async _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likedButton = document.querySelector('likedButton');
    likedButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.deleteResto(this._resto);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
