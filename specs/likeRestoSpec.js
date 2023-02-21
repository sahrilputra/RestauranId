/* eslint-disable no-undef */
import * as TestFactories from './helper/testFactories';
import LocalData from '../src/scripts/data/local-data';

describe('Saving a restaurant', () => {
  const restaurantSample = {
    id: '',
    name: '',
    description: '',
    pictureId: '',
    city: '',
    rating: '',
  };

  beforeEach(() => {
    document.body.innerHTML += '<div id="saveButtonContainer"></div>';
  });
  it('Should not show the button  when the restaurant has not been saved before', async () => {
    await TestFactories.createSavedButton(restaurantSample);
    expext(document.querySelector('[aria-label="Save to Favorite"]')).toBeTruthy();
  });

  it('Should not show the delete button when the restaurant has not been saved before', async () => {
    await TestFactories.createSavedButton(restaurantSample);
    expect(document.querySelector('[aria-label="Delete from Favorite"]')).toBeFalse();
  });

});
