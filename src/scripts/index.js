import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import '../styles/navigation.scss';
import '../styles/card.scss'
import DATA from '../DATA.json';
console.log(DATA)
const getData=(data)=>{
    let cardHtml = '';
    data.restaurants.forEach((resto, i) =>{
        cardHtml += `
      <div tabindex="0" class="card">
      <div class="card__container"> 
        <div class="card__imgCont">
          <img tabindex="0" class="card__img" alt="${resto.name}" src="${resto.pictureId}"/>
          <span tabindex="0" class="card__rating">
            <i title="ratings" class="fa fa-star"></i>
            <span>${resto.rating}</span>
          </span>
        </div>

        <div tabindex="0" class="card__content">
          <p class="card__title">${resto.name} - ${resto.city}</p>
          <p class="card__descr">${resto.description}</p>
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

// getData(DATA);