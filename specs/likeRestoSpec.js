/* eslint-disable no-undef */
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';
// import { createLikeButtonPresenterWithRestaurant } from './helper/TestFactories';
import * as TestFactories from './helper/TestFactories';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

beforeEach(() => {
  addLikeButtonContainer();
});

describe('Liking a Resto', () => {
  it('should show the like button when the resto has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="like this resto"]'),
    ).toBeTruthy();
  });

  it('should not show the unlike button when the resto has not been liked before', async () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="unlike this resto"]'),
    ).toBeFalsy();
  });

  it('Should be able to like the restaurant', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    const restaurant = await FavoriteRestoIdb.getResto(1);
    expect(restaurant).toEqual({ id: 1 });
    FavoriteRestoIdb.deleteResto(1);
  });

  it('Should not add a resto again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    await FavoriteRestoIdb.putResto({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAllResto()).toEqual([{ id: 1 }]);

    FavoriteRestoIdb.deleteResto(1);
  });

  it('Should not add a resto when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({});
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
  });
});
