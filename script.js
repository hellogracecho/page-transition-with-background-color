const originalSlider = document.querySelector('.background-original-slider');
const nextSlider = document.querySelector('.background-next-slider');
const links = document.querySelectorAll('nav a');


links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    // Add background-color transition effect
    nextSlider.classList.add('is-transition');
    originalSlider.classList.add('is-transition');

    // Simulate the transition by delaying the navigation
    setTimeout(() => {
      window.location.href = link.getAttribute('href');
    }, 1000); // 1 second to match the CSS transition duration
  });
});
  