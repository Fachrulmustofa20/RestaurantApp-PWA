import RestoDBSource from '../../data/restodb-source';
import UrlParser from '../../routes/url-parser';
import likeButtonInitiator from '../../utils/like-button-initiator';
import { restoDetailTemplate, spinner } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
            <div id="restaurant" class="restaurant"></div>
            <div id="likeButtonContainer"></div>
        `;
  },

  async afterRender() {
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurantContainer = document.querySelector('#restaurant');
      restaurantContainer.innerHTML = spinner;
      const restaurant = await RestoDBSource.DetailRestaurant(url.id);
      restaurantContainer.innerHTML += restoDetailTemplate(restaurant);
      restaurantContainer.querySelector('.spinner').setAttribute('hidden', '');

      likeButtonInitiator.Infinity({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          description: restaurant.description,
          pictureId: restaurant.pictureId,
          rating: restaurant.rating,
          address: restaurant.address,
          city: restaurant.city,
          menus: restaurant.menus,
          categories: restaurant.categories,
          customerReviews: restaurant.customerReviews,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
};

export default Detail;
