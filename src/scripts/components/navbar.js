class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <button id="hamburgerBtn" type="button" aria-label="hamburger menu">
      <i id="hamburger" class="fa fa-bars"></i>
    </button>
    <div class="container" id="navbar" >
    <a class="skipLink" href="#mainContent">Skip to content</a>
    <nav class="nav">
      <h1 class="nav__logo"  tabindex="0">Restaurant</h1>
      <ul class="nav__list" id="drawer" >

        <li class="nav__item"><a href="/">Home</a></li>
        <li class="nav__item"><a href="#/favorite">Favorite</a></li>
        <li class="nav__item"><a href="https://github.com/sahrilputra">About</a></li>
      </ul>
    </nav>
   </div>
    `;
  }
}

customElements.define('navbar-element', Navbar);
