import 'regenerator-runtime';
import DrawerInitiator from '../utils/drawer-initiator';
import routes from '../routes/routes';
import UrlParse from '../routes/url-parser';

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

  async renderPage() {
    const url = UrlParse.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHtml = await page.render();
    await page.afterRender();
  }
}

export default App;
