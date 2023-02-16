class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer>
    <p>Copyright © 2021 - Restaurant</p>
    <p>Sahril Putra</p>
    </footer>
    `;
  }
}

customElements.define('footer-component', Footer);
