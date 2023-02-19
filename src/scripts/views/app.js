import 'regenerator-runtime';
import DrawerInitiator from '../utils/drawer-initiator';
import routes from '../routes/routes';
import UrlParse from '../routes/url-parser';

class App {
  constructor({
    button,
    drawer,
    content,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });

    // kita bisa menginisiasikan komponen lain bila ada
  }

  async renderPage() {
    const url = UrlParse.parseActiveUrlWithCombiner();
    const page = routes[url];

    try {
      this._content.innerHTML = await page.render();
      await page.afterRender();
    } catch (err) {
      this._content.innerHTML = `<h2>Cannot access the web, please see your connection</h2>
      <p>Error: ${err.message}</p>
      `;
      console.log(err.message);
    }
  }
}

export default App;
