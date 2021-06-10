import FavoriteRestaurantIdb from '../../data/favoriteresto-idb';
import { restoListTemplate, spinner } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
        <section class="content">
            <div class="latest">
                <h1 class="latest-label"><span class="underline">Favorite Restaurant</span></h1>
                <div class="loader"></div>
                <div id="list" class="list">
                </div>
            </div>
        </section>
        `;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector('#list');
    const preloader = document.querySelector('.loader');
    preloader.innerHTML = spinner;
    const restaurant = await FavoriteRestaurantIdb.getAllResto();
    restaurant.forEach((resto) => {
      restaurantContainer.innerHTML += restoListTemplate(resto);
    });
    preloader.querySelector('.spinner').setAttribute('hidden', '');
  },
};

export default Favorite;
