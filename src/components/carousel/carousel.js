import { html, render } from 'lit-html';

const carousels = Array.from(document.querySelectorAll(".carousel"));
const slides = [];

carousels.forEach(carousel => {
  const carouselSlides = Array.from(carousel.querySelectorAll(".carousel > .carousel__slide"));
  slides.push(carouselSlides);
});


class Carousel {
  currentSlide = 0;
  
  constructor(slides, carousel) {
    this.slides = slides;
    this.carousel = carousel
  }

  previous(e) {
    if (e.type === "click" || e.type === "keyup" && e.key === "Enter") {
      this.currentSlide--;
      this.slides.forEach(slide => slide.style.transform = `translateX(${ -100 * this.currentSlide }%)`);
      render(this.getTemplate(), this.carousel)
    }
  }

  next(e) {
    if (e.type === "click" || e.type === "keyup" && e.key === "Enter") {
      this.currentSlide++;
      this.slides.forEach(slide => slide.style.transform = `translateX(${ -100 * this.currentSlide }%)`);
      render(this.getTemplate(), this.carousel)
    }
  }

  getTemplate() {
    return html`
    <button ?disabled=${this.currentSlide === 0} @click=${ this.previous.bind(this) } @keyup=${ this.previous.bind(this) }"
      class="carousel__arrow icon">
      <svg tabindex="-1" viewBox="0 0 24 24">
        <use class="carousel__arrow-icon" href="./img/arrow-left.svg#icon"></use>
      </svg>
    </button>
    ${ slides.map(slide => html`${ slide }`) }
    <button ?disabled=${this.currentSlide === this.slides.length - 1} @click=${ this.next.bind(this) } @keyup=${ this.next.bind(this) } class="carousel__arrow carousel__arrow--right icon">
      <svg tabindex="-1" viewBox="0 0 24 24">
        <use class="carousel__arrow-icon" href="./img/arrow-right.svg#icon"></use>
      </svg>
    `;
  }
}

carousels.forEach((carousel, index) => {
  const carouselClass = new Carousel(slides[index], carousel);
  render(carouselClass.getTemplate(), carousel);
});