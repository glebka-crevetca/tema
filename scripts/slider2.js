document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".fonts-wrapper");
  const prev = document.querySelector(".fonts-prev");
  const next = document.querySelector(".fonts-next");
  let current = 0;
  const total = document.querySelectorAll(".fonts-slide").length; 

  if (wrapper && prev && next) {
    function updateSlider() {
      wrapper.style.transform = `translateX(-${current * 100}%)`;
    }

    next.addEventListener("click", () => {
      if (current < total - 1) {
        current++;
        updateSlider();
      }
      else { current = 0; updateSlider(); }
    });

    prev.addEventListener("click", () => {
      if (current > 0) {
        current--;
        updateSlider();
      }
       else { current = total - 1; updateSlider(); }
    });
  }
});
