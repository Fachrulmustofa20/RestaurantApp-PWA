class FooterElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <p>Copyright © 2021 - Resto Point Apps</p>
        `;
  }
}
customElements.define('footer-element', FooterElement);
