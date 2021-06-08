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
    <h1 class="restaurant-name"><span class="underline">${resto.name}</span></h1>
    <img class="restaurant-image" src="${CONFIG.MEDIUM_IMAGE_URL(resto.pictureId)}" alt="${resto.name}">
    <div class="restaurant-info">
        <h2 class="rating-info">Rating: ${resto.rating}</h2>
        <h2>Informasi</h2>
        <h3 class="description">Deskripsi</h3>
        <p>${resto.description}</p>
        <h3 class="address">Alamat Lengkap</h3>
        <p>${resto.address}, ${resto.city}</p>
        <h3 class="category">Kategori Menu</h3>
        <p>${resto.categories.map((category) => category.name).join(', ')}</p>
        <h3 class="menu">Menu</h3>
        <h4 class="food">Makanan</h4>
        <p>${resto.menus.foods.map((food) => food.name).join(', ')}</p>
        <h4 class="drink">Minuman</h4>
        <p>${resto.menus.drinks.map((drink) => drink.name).join(', ')}</p>
        <div class="customer-reviews">
            <h4>Costumer Reviews</h4>
            ${resto.customerReviews.map((customer) => `
                    <div class="reviews">        
                        <h5 class="customer-name">${customer.name}</h5>
                        <p class="date">${customer.date}</p>
                        <p>${customer.review}</p>
                    </div>
                `)}
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
export {
  restoListTemplate,
  restoDetailTemplate,
  spinner,
};
