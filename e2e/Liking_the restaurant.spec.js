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
