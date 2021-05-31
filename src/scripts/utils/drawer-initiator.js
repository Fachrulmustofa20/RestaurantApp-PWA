/* eslint-disable no-underscore-dangle */
const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer, button);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },
  _toggleDrawer(event, drawer, button) {
    button.classList.toggle('open');
    drawer.classList.toggle('mobile-nav');
    event.preventDefault();
  },
  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('mobile-nav');
  },
};

export default DrawerInitiator;
