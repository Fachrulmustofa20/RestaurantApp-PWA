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
            <div class="form-review">
              <h4 class="add-review"><span class="underline">Tambahkan Review</span></h4>
              <form>
                <div class="full-width">
                  <label for="inputName">Nama</label>
                  <input name="inputName" type="text" id="inputName" />
                </div>
                <div class="full-width">
                  <label for="inputReview">Reviews</label>
                  <textarea name="inputReview" id="inputReview" cols="30" rows="7"></textarea>
                </div>
                <div class="full-width">
                  <button id="submit-review" class="submit-review" type="submit"><i class="fa fa-paper-plane" aria-hidden="true"></i> Kirim</button>
                </div>
              </form>
            </div>
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
    } catch (error) {
      restaurantContainer.innerHTML = notConnection;
    }

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
  },
};

export default Detail;
