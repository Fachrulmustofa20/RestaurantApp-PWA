const CONFIG = {
  BASE_URL: 'https://restaurant-api.dicoding.dev/',
  SMALL_IMAGE_URL: (pictureId) => `${CONFIG.BASE_URL}images/small/${pictureId}`,
  MEDIUM_IMAGE_URL: (pictureId) => `${CONFIG.BASE_URL}images/medium/${pictureId}`,
  LARGE_IMAGE_URL: (pictureId) => `${CONFIG.BASE_URL}images/large/${pictureId}`,
  CACHE_NAME: new Date().toISOString(),
  DATABASE_NAME: 'pwa-restaurant-db',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'Resto',
};

export default CONFIG;
