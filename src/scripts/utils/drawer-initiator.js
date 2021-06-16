/* eslint-disable no-underscore-dangle */
const DrawerInitiator = {
  init({ button, drawer }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer, button);
    });
  },
  _toggleDrawer(event, drawer, button) {
    button.classList.toggle('open');
    drawer.classList.toggle('mobile-nav');
    event.preventDefault();
  },
};

export default DrawerInitiator;
