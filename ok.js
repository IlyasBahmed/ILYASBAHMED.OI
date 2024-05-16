const slides = document.querySelector('.slides');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let slideIndex = 0;

prevButton.addEventListener('click', () => {
  slideIndex--;
  showSlide();
});

nextButton.addEventListener('click', () => {
  slideIndex++;
  showSlide();
});

window.addEventListener('scroll', function() {
  var header = document.getElementById('myHeader');
  if (window.scrollY > 0) {
      header.classList.add('scrolled');
  } else {
      header.classList.remove('scrolled');
  }
});