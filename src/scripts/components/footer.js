class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer>
    <p>Copyright © 2021 - Restaurant</p>
    <p>Sahril Putra</p>
    <h1> HELLO WORLD </h1>
    </footer>
    `;
  }
}

customElements.define('footer-component', Footer);
