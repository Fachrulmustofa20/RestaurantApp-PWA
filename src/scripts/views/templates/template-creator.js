import CONFIG from '../../globals/config';

/* eslint-disable no-unused-expressions */
const restoListTemplate = (resto) => `<div class="list-item">
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

export default restoListTemplate;
