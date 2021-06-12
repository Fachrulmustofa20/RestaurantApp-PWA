import FavoriteRestaurantIdb from '../../data/favoriteresto-idb';
import { isEmpty, restoListTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
        <section class="content">
            <div class="latest">
                <h1 class="favorite-label"><span class="underline">Favorite Restaurant</span></h1>
                <div class="loader"></div>
                <div id="list" class="list">
                </div>
            </div>
        </section>
        `;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector('#list');
    const restaurant = await FavoriteRestaurantIdb.getAllResto();
    const preloader = document.querySelector('.loader');
    if (restaurant.length !== 0) {
      restaurant.forEach((resto) => {
        restaurantContainer.innerHTML += restoListTemplate(resto);
      });
    } else {
      preloader.innerHTML = isEmpty;
    }
  },
};

export default Favorite;
