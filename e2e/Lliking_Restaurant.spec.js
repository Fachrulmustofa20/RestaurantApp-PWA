/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Movies');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.see('Oppss!..Anda belum memiliki restaurant favorit!', '.empty');
});

Scenario('Add to liked restaurant', async ({ I }) => {
  I.see('Oppss!..Anda belum memiliki restaurant favorit!', '.empty');
  I.amOnPage('/');

  const firstRestaurant = locate('.item-title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.list-item');

  const likedRestaurantTitle = await I.grabTextFrom('.item-title');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('Remove to liked restaurant', async ({ I }) => {
  I.see('Oppss!..Anda belum memiliki restaurant favorit!', '.empty');
  I.amOnPage('/');
  // add like restaurant
  const firstRestaurant = locate('.item-title a').first();
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.list-item');
  // remove like restaurant
  I.seeElement('.list-item');
  I.click('.item-title a');

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.dontSee('.list-item');
});
