import 'regenerator-runtime'; /* for async await transpile */

// Css
import '../styles/loader.scss';
import '../styles/card.scss';
import '../styles/detail.scss';
import '../styles/navigation.scss';
import '../styles/main.scss';
import NavControl from './utils/nav-control';
import swRegister from './utils/sw-register';
import App from './views/app';

// custom components
import './components/navbar';
import './components/heroSection';
import './components/footer';

const skipLinkElem = document.querySelector('.skipLink');
skipLinkElem.addEventListener('click', (event) => {
  event.preventDefault();
  document.querySelector('#main_content').focus();
});

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#main_content'),
});

window.onscroll = () => {
  NavControl();
};

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
