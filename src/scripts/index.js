import 'regenerator-runtime'; /* for async await transpile */

// Css
import '../styles/card.scss';
import '../styles/navigation.scss';
import '../styles/main.scss';
import App from './views/app';
// navigasi
// document.querySelector('#hamburger').addEventListener('click', (e) => {
//   document.querySelector('#drawer').classList.toggle('navTogle');
//   e.stopPropagation();
// });

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#mainContent'),
  navbar: document.querySelector('#navbar'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
// const getData = (data) => {
//   let cardHtml = '';
//   data.restaurants.forEach((resto, i) => {
//     cardHtml += `
//         <div tabindex="0" class="card">
//         <div class="card__img">
//           <img tabindex="0"src="${resto.pictureId}" alt="${resto.name}">
//           <span class="card__rating"  tabindex="0">${resto.rating} </span>
//         </div>
//         <div class="card__text"  tabindex="0">
//           <p class="card__title" >${resto.name} - ${resto.city}</p>
//             <div class="card__paraf">
//               <p>${resto.description}</p>
//             </div>
//         </div>
//       </div>

//       `;
//   })

//   document.getElementById('card').innerHTML = cardHtml;
// }
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
