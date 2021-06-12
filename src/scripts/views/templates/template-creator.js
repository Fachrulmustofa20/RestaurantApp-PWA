import CONFIG from '../../globals/config';

/* eslint-disable no-unused-expressions */
const restoListTemplate = (resto) => `
    <div class="list-item">
        <img class="list-item-thumb" src="${CONFIG.SMALL_IMAGE_URL(resto.pictureId)}" alt="${resto.name}" loading="lazy">
        <div class="list-city">
            <p class="city">Kota: ${resto.city} </p>
        </div>
        <div class="item-content">
            <h1 class="item-title"><a href="${`/#/detail/${resto.id}`}">${resto.name}</a></h1>
            <p class="rating">Rating: <span class="rating-numbs"> ${resto.rating}⭐️</span></p>
            <p class="item-description">${resto.description}</p>
        </div>
    </div>
    `;

const restoDetailTemplate = (resto) => `
    <img class="restaurant-image" src="${CONFIG.MEDIUM_IMAGE_URL(resto.pictureId)}" alt="${resto.name}">
    <div class="restaurant-info">
        <h2 class="restaurant-name"><span class="underline">${resto.name}</span></h2>
        <h3 class="rating-info">Rating: ${resto.rating}</h3>
        <p>${resto.description}</p>
        <p class="address"><i class="fa fa-map-marker" aria-hidden="true"></i> <strong>${resto.address}, ${resto.city}</strong></p>
        <h3 class="category"><span class="underline">Kategori Menu</span></h3>
        <p>${resto.categories.map((category) => category.name).join(', ')}</p>
        <h3 class="menu">Menu</h3>
        <h4 class="food"><span class="underline">Makanan</span></h4>
        <p>${resto.menus.foods.map((food) => food.name).join(', ')}</p>
        <h4 class="drink"><span class="underline">Minuman</span></h4>
        <p>${resto.menus.drinks.map((drink) => drink.name).join(', ')}</p>
        <div class="customer-reviews">
            <h4><span class="underline">Customer Reviews</span></h4>
            ${resto.customerReviews.map((customer) => `
                    <div class="reviews">        
                        <h5 class="customer-name">${customer.name}</h5>
                        <p class="date">${customer.date}</p>
                        <p>${customer.review}</p>
                    </div>
                `).join('')}
        </div>
    </div>
    `;

const spinner = `
<div class="spinner">
  <div class="rect1"></div>
  <div class="rect2"></div>
  <div class="rect3"></div>
  <div class="rect4"></div>
  <div class="rect5"></div>
</div>
`;

const notConnection = `
  <div class="not-connection">
      <img src="./images/no-connection.png" class="img-internet">
      <h3 class="not-internet">Uppss!..Anda sedang tidak terhubung dengan internet!</h3>
  </div>
`;

const isEmpty = `
  <div class="isEmpty">
    <img src="./images/is-empty.png" class="img-null">
    <h3 class="empty">Uppss!..Anda belum memiliki restaurant favorit!</h3>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  restoListTemplate,
  restoDetailTemplate,
  spinner,
  notConnection,
  isEmpty,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
