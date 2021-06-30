import likeButtonInitiator from '../../src/scripts/utils/like-button';
import FavoriteRestaurantIdb from '../../src/scripts/data/favoriteresto-idb';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await likeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    FavoriteRestaurant: FavoriteRestaurantIdb,
    restaurant,
  });
};

export default createLikeButtonPresenterWithRestaurant;
