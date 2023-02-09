import 'regenerator-runtime'; /* for async await transpile */

// Css
import '../styles/card.scss'
import '../styles/navigation.scss';
import '../styles/main.scss';

//data 
import DATA from '../DATA.json';

document.querySelector('#hamburger').addEventListener('click', ()=>{
  document.querySelector('#drawer').classList.toggle('navTogle');
})
console.log(DATA)
const getData=(data)=>{
    let cardHtml = '';
    data.restaurants.forEach((resto, i) =>{
        cardHtml += `
        <div tabindex="0" class="card">
        <div class="card__img">
          <img tabindex="0"src="${resto.pictureId}" alt="${resto.name}">
          <span class="card__rating"  tabindex="0">${resto.rating} </span>
        </div>
        <div class="card__text"  tabindex="0">
          <p class="card__title" >${resto.name} - ${resto.city}</p>
            <div class="card__paraf">
              <p>${resto.description}</p>
            </div>
        </div>
      </div>
        
      `;
    })
    

    document.getElementById('card').innerHTML=cardHtml;
}
const navControl = () => {
    const navBar = document.querySelector('.container');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById('navbar').style.background = "#0d0d0d";
      } else {
        document.getElementById("navbar").style.background = "none";
      }
}
window.onscroll = function() {navControl()};
getData(DATA);
