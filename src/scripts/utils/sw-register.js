import * as workBoxWindow from 'workbox-window';

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('service Worker not Support in the browser');
    return;
  }

  const wb = new workBoxWindow.Workbox('./sw.bundle.js');

  try {
    await wb.register();
    console.log('Service Worker registered');
  } catch (error) {
    console.log('failed to register service workder', error);
  }
};

export default swRegister;
