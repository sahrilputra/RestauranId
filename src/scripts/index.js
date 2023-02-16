import 'regenerator-runtime'; /* for async await transpile */

// Css
import '../styles/card.scss';
import '../styles/detail.scss';
import '../styles/navigation.scss';
import '../styles/main.scss';
import swRegister from './utils/sw-register';
import App from './views/app';

// custom components
import './components/navbar';
import './components/footer';

// navigasi
document.querySelector('#hamburger').addEventListener('click', (e) => {
  document.querySelector('#drawer').classList.toggle('navTogle');
  e.stopPropagation();
});

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#main_content'),
});

const navControl = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById('navbar').style.background = '#0d0d0d';
  } else {
    document.getElementById('navbar').style.background = 'none';
  }
};

window.onscroll = () => {
  navControl();
};

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
