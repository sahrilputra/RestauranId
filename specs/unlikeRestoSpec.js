/* eslint-disable no-undef */

import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';
import { createLikeButtonPresenterWithRestaurant } from './helper/TestFactories';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Unlike a resto', () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestoIdb.putResto({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestoIdb.deleteResto(1);
  });

  it('Should display unlike widget when the restaurant has been liked', async () => {
    await createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="unlike this resto"]'),
    ).toBeTruthy();
  });

  it('should not display like widget when the resto has been liked', async () => {
    await createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('[aria-label="unlike this resto"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
  });

  it('SHould not throw error if the unliked resto is not in the list', async () => {
    await createLikeButtonPresenterWithRestaurant({ id: 1 });
    await FavoriteRestoIdb.deleteResto(1);

    document.querySelector('[aria-label="unlike this resto"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
  });
});
