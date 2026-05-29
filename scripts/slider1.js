document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".pages .slider-wrapper");
  const prev = document.querySelector(".pages .prev-btn");
  const next = document.querySelector(".pages .next-btn");
  let currentIndex = 0;
  const totalSlides = document.querySelectorAll(".pages .slide").length;

  function updateSlider() {
    wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  next.addEventListener("click", () => {
    if (currentIndex === totalSlides - 1) {
      currentIndex = 0; 
    } else {
      currentIndex++;
    }
    updateSlider();
  });

  prev.addEventListener("click", () => {
    if (currentIndex === 0) {
      currentIndex = totalSlides - 1; 
    } else {
      currentIndex--;
    }
    updateSlider();
  });
});
