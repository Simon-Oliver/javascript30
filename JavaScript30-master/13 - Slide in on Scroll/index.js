function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function deb(...args) {
    const context = this;
    const later = function time() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide() {
  sliderImages.forEach(e => {
    const slideInAt = window.scrollY + window.innerHeight - e.height / 2;

    const imageBottom = e.offsetTop + e.height;
    const isHalfShown = slideInAt > e.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPast) {
      e.classList.add('active');
    } else {
      e.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', debounce(checkSlide));
