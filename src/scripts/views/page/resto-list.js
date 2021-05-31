import RestoDBSource from '../../data/restodb-source';
import restoListTemplate from '../templates/template-creator';

const restoList = {
  async render() {
    return `
        <section class="content">
            <div class="latest">
                <h1 class="latest-label"><span class="underline">Explore Restaurant</span></h1>
                <div id="list" class="list">
                
                </div>
            </div>
        </section>
        `;
  },
  async afterRender() {
    const restaurant = await RestoDBSource.RestaurantList();

    const restaurantContainer = document.querySelector('#list');
    restaurant.forEach((resto) => {
      restaurantContainer.innerHTML += restoListTemplate(resto);
    });
  },
};

export default restoList;
