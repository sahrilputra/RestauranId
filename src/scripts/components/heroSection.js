class HeroSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero">
      <div class="hero__content"  tabindex="0">
      <h1>The Restaurant</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, placeat provident. Maiores et quam aperiam architecto voluptatum velit ipsum aspernatur.</p>
      </div>
    </div>
    `;
  }
}

customElements.define('hero-component', HeroSection);
