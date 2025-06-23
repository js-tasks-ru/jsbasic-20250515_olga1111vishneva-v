import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this._container = this.createCarousel();
    this.currentSlideIndex = 0;
    this.initEventListeners();
    this.renderSlides();
    this.updateArrowVisibility();
  }

  createCarousel() {
    const carousel = createElement(`
            <div class="carousel">
                <div class="carousel__inner"></div>
                <button class="carousel__arrow carousel__arrow_left" style="display: none;">
                    <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
                </button>
                <button class="carousel__arrow carousel__arrow_right">
                    <img src="/assets/images/icons/angle-icon.svg" alt="icon">
                </button>
            </div>
        `);

    return carousel;
  }

  renderSlides() {
    const inner = this._container.querySelector('.carousel__inner');
    inner.innerHTML = '';

    for (const slide of this.slides) {
      const slideElement = createElement(`
                <div class="carousel__slide" data-id="${slide.id}">
                    <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="${slide.name}">
                    <div class="carousel__caption">
                        <span class="carousel__price">€${slide.price.toFixed(2)}</span>
                        <div class="carousel__title">${slide.name}</div>
                        <button type="button" class="carousel__button">
                            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
                        </button>
                    </div>
                </div>
            `);

      const button = slideElement.querySelector('.carousel__button');
      button.addEventListener('click', () => {
        const event = new CustomEvent('product-add', {
          detail: slide.id,
          bubbles: true
        });
        slideElement.dispatchEvent(event);
      });

      inner.appendChild(slideElement);
    }

    this.updateSlideVisibility();
  }

  initEventListeners() {
    const leftArrow = this._container.querySelector('.carousel__arrow_left');
    const rightArrow = this._container.querySelector('.carousel__arrow_right');

    leftArrow.addEventListener('click', () => {
      this.currentSlideIndex--;
      this.updateSlideVisibility();
      this.updateArrowVisibility();
    });

    rightArrow.addEventListener('click', () => {
      this.currentSlideIndex++;
      this.updateSlideVisibility();
      this.updateArrowVisibility();
    });
  }

  updateSlideVisibility() {
    const inner = this._container.querySelector('.carousel__inner');
    const slides = inner.children;

    if (this.currentSlideIndex < 0) {
      this.currentSlideIndex = 0;
    } else if (this.currentSlideIndex >= slides.length) {
      this.currentSlideIndex = slides.length - 1;
    }

    const slideWidth = slides[this.currentSlideIndex].offsetWidth;

    const offset = -this.currentSlideIndex * slideWidth;
    inner.style.transform = `translateX(${offset}px)`;
  }

  updateArrowVisibility() {
    const leftArrow = this._container.querySelector('.carousel__arrow_left');
    const rightArrow = this._container.querySelector('.carousel__arrow_right');

    leftArrow.style.display = this.currentSlideIndex === 0 ? 'none' : '';
    rightArrow.style.display = this.currentSlideIndex === this.slides.length - 1 ? 'none' : '';
  }

  get elem() {
    return this._container;
  }
}
