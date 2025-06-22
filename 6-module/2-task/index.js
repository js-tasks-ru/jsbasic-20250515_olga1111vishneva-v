import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.product = product;
    this._container = this.createCard();
    this.initEventListeners();
  }

  createCard() {
    const image = `/assets/images/products/${this.product.image}`;

    const card = createElement(`
            <div class="card">
                <div class="card__top">
                    <img src="${image}" class="card__image" alt="product">
                    <span class="card__price">€${this.product.price.toFixed(2)}</span>
                </div>
                <div class="card__body">
                    <div class="card__title">${this.product.name}</div>
                    <button type="button" class="card__button">
                        <img src="/assets/images/icons/plus-icon.svg" alt="icon">
                    </button>
                </div>
            </div>
        `);

    return card;
  }

  initEventListeners() {
    const button = this._container.querySelector('.card__button');

    button.addEventListener('click', () => {

      const event = new CustomEvent('product-add', {
        detail: this.product.id,
        bubbles: true
      });
      this._container.dispatchEvent(event);
    });
  }

  get elem() {
    return this._container;
  }
}