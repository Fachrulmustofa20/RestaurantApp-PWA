import FavoriteRestaurantIdb from '../../data/favoriteresto-idb';
import { restoListTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
        <section class="content">
            <div class="latest">
                <h1 class="favorite-label"><span class="underline">Favorite Restaurant</span></h1>
                <div id="list" class="list">
                </div>
            </div>
        </section>
        `;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector('#list');
    const restaurant = await FavoriteRestaurantIdb.getAllResto();
    restaurant.forEach((resto) => {
      restaurantContainer.innerHTML += restoListTemplate(resto);
    });
  },
};

export default Favorite;
