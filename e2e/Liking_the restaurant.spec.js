/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking the restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked resto', ({ I }) => {
  I.waitForElement('#notFound', 30);
  I.seeElement('#query');
  I.see('Tidak ada restaurant untuk ditampilkan', '#notFound');
});

Scenario('liking one Resto', async ({ I }) => {
  I.waitForElement('#notFound', 30);
  I.see('Tidak ada restaurant untuk ditampilkan', '#notFound');

  I.amOnPage('/');
  I.seeElement('#mainContent');
  I.waitForElement('.card', 50);
  I.seeElement('.card__title a');
  const firstRestoTitle = locate('.card__title a').first();
  const firstFilmCard = await I.grabTextFrom('.card__title');

  I.click(firstRestoTitle);

  I.waitForElement('.detail', 50);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('#fav-resto', 30);

  const likedRestoTitle = await I.grabTextFrom('.card__title');

  assert.strictEqual(firstFilmCard, likedRestoTitle);
});
