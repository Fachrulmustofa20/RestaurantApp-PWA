class HeroElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="hero">
            <div class="hero-inner">
                <h1 class="hero-title">Cari Restoran Ya <span class="highlight">Resto Point</span></h1>
                <p class="hero-tagline">Mudahnya cari restoran terbaik di Resto Point</p>
            </div>
        </div>
        `;
  }
}
customElements.define('hero-element', HeroElement);
