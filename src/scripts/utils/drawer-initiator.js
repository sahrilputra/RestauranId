const DrawerInitiator = {

  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    button.addEventListener('click', (event) => {
      this._toggleDrawer(event);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },

};

export default DrawerInitiator;
