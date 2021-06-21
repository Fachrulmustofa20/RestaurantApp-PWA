/* eslint-disable no-alert */
import RestoDBSource from '../../data/restodb-source';
import UrlParser from '../../routes/url-parser';
import likeButtonInitiator from '../../utils/like-button-initiator';
import PostReview from '../../utils/post-review';
import { notConnection, restoDetailTemplate, spinner } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
            <div id="restaurant" class="restaurant"></div>
            <div id="likeButtonContainer"></div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = spinner;
    try {
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

      const btnSubmit = document.querySelector('#submit-review');
      const nameInput = document.querySelector('#inputName');
      const reviewInput = document.querySelector('#inputReview');

      btnSubmit.addEventListener('click', (e) => {
        e.preventDefault();
        if (nameInput.value === '' || reviewInput.value === '') {
          alert('Nama dan Review tidak boleh kosong');
          nameInput.value = '';
          reviewInput.value = '';
        } else {
          PostReview(url, nameInput.value, reviewInput.value);
          nameInput.value = '';
          reviewInput.value = '';
        }
      });
    } catch (error) {
      restaurantContainer.innerHTML = notConnection;

      const formRewiewContainer = document.querySelector('.form-review');
      formRewiewContainer.setAttribute('hidden', '');
    }
  },
};

export default Detail;
