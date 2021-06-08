import RestoDBSource from '../../data/restodb-source';
import UrlParser from '../../routes/url-parser';
import { restoDetailTemplate, spinner } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
            <div id="restaurant" class="restaurant">
            <div id="likeButtonContainer">
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
    } catch (error) {
      console.log(error);
    }
  },
};

export default Detail;
