const DrawerInitiator = {
  init({
    button,
    drawer,
    content,
    navbar,
  }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });

    navbar.addEventListener('scroll', (event) => {
      this._changeBackground(event, navbar);
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

  _changeBackground(event, navbar) {
    event.stopPropagation();
    navbar.classList.toggle('geloo');
  },

};

export default DrawerInitiator;
