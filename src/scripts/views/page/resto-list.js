import RestoDBSource from '../../data/restodb-source';
import { restoListTemplate, spinner } from '../templates/template-creator';

const restoList = {
  async render() {
    return `
        <section class="content">
            <div class="latest">
                <h1 class="latest-label"><span class="underline">Explore Restaurant</span></h1>
                <div class="loader"></div>
                <div id="list" class="list">
                </div>
            </div>
        </section>
        `;
  },
  async afterRender() {
    try {
      const restaurantContainer = document.querySelector('#list');
      const preloader = document.querySelector('.loader');
      preloader.innerHTML = spinner;
      const restaurant = await RestoDBSource.RestaurantList();
      restaurant.forEach((resto) => {
        restaurantContainer.innerHTML += restoListTemplate(resto);
      });
      preloader.querySelector('.spinner').setAttribute('hidden', '');
    } catch (error) {
      console.log(error);
    }
  },
};

export default restoList;
