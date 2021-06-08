/* eslint-disable import/no-unresolved */
import { runtime } from 'serviceworker-webpack-plugin/lib/runtime';

const swRegister = async () => {
  if ('serviceWorker' in navigator) {
    await runtime.register();
    return;
  }
  console.log('Service Worker Tidak diSupport Oleh Browser');
};

export default swRegister;
