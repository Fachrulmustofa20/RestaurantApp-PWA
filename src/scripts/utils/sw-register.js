/* eslint-disable import/no-extraneous-dependencies */
import { Workbox } from 'workbox-window';

const swRegister = () => {
  if ('serviceWorker' in navigator) {
    const workbox = new Workbox('../sw.js');
    workbox.register();
    console.log('Registrasi service worker berhasil.');
  } else {
    console.log('Service worker tidak didukung browser ini.');
  }
};

export default swRegister;
