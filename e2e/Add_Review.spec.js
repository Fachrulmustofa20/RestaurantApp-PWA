/* eslint-disable no-undef */
Feature('Add Reviews');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Add new reviews restaurant', async ({ I }) => {
  const firstRestaurant = locate('.item-title a').first();
  I.click(firstRestaurant);

  const textReview = 'Hai ini review dari e2e Testing';
  const name = 'Fachrul';

  I.seeElement('form');
  I.fillField('Nama', name);
  I.fillField('Reviews', textReview);
  I.click('#submit-review');
  I.see(textReview, 'p');
});
