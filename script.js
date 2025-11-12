document.getElementById("year").textContent = new Date().getFullYear();
// Scroll fade-in animation
const fadeElements = document.querySelectorAll('.fade-in');

function checkFadeIn() {
  const triggerBottom = window.innerHeight * 0.85;

  fadeElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', checkFadeIn);
window.addEventListener('load', checkFadeIn);
