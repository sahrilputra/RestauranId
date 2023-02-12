import DrawerInitiator from '../utils/drawer-initiator';

class App {
  constructor({
    button,
    drawer,
    content,
    navbar,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._navbar = navbar;
    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      navbar: this._navbar,
    });

    // kita bisa menginisiasikan komponen lain bila ada
  }
}

export default App;
