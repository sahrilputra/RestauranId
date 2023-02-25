

/* eslint-disable no-undef */
Feature('Liking the restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked resto', ({ I }) => {
  I.waitForElement('#notFound', 30);
  I.seeElement('#query');
  I.see('Tidak ada restaurant untuk ditampilkan', '#notFound');
});

Scenario('liking one movie', ({ I }) => {
  I.waitForElement('#notFound', 30);
  I.see('Tidak ada restaurant untuk ditampilkan', '#notFound');

  I.amOnPage('/');
  I.waitForElement('.card', 50);
  I.seeElement('.card-a-tag');
  I.click(locate('#tagCard').first());

  I.waitForElement('.detail_container', 30);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.card');
});
