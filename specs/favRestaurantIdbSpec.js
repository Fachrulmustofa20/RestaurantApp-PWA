/* eslint-disable no-undef */
import FavoriteRestaurantIdb from '../src/scripts/data/favoriteresto-idb';
import { itActsAsFavoriteRestaurantModel } from './contract/favRestaurantContract';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantIdb.getAllResto()).forEach(async (restaurant) => {
      await FavoriteRestaurantIdb.deleteResto(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantIdb);
});
