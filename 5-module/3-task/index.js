function initCarousel() {
  const rightButton = document.querySelector('.carousel__arrow_right');
  const leftButton = document.querySelector('.carousel__arrow_left');
  const carouselInner = document.querySelector('.carousel__inner');
  const slides = carouselInner.children;
  const allSlides = slides.length;

  let currentIndex = 0;

  function updateCarousel() {
    const slideWidth = slides[0].offsetWidth;

    carouselInner.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

    rightButton.style.display = (currentIndex === 0) ? 'none' : '';
    leftButton.style.display = (currentIndex === allSlides - 1) ? 'none' : '';
  }

  leftButton.style.display = 'none';

  rightButton.addEventListener('click', () => {
    if (currentIndex < allSlides - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  leftButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });
}
