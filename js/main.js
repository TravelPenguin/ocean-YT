'use strict'

{
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const ul = document.getElementById('carouselUl');
  const slides = ul.children;
  let currentIndex = 0;
  
  function updateButtons () {
    prev.classList.remove('hidden');
    next.classList.remove('hidden');
    
    if (currentIndex === 0) {
      prev.classList.add('hidden');
    }
    if (currentIndex === slides.length - 1) {
      next.classList.add('hidden');
    }
  }
  
  function moveSlides() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
  }
  
  updateButtons();
  
  next.addEventListener('click', () => {
    currentIndex++;
    updateButtons();
    moveSlides();
  });
  prev.addEventListener('click', () => {
    currentIndex--;
    updateButtons();
    moveSlides();
  });
  
  window.addEventListener('resize', () => {
    moveSlides();
  });
}
//Achievement img API
const trophyImg = document.getElementById('trophyImg');
const stadiumImg = document.getElementById('stadiumImg');

function callback(entries) {
  if (entries[0].isIntersecting) {
    entries[0].target.classList.add('appear');
  } else {
    entries[0].target.classList.remove('appear');
  }
};

const options = {
  threshold: [0.3]
};

const observer = new IntersectionObserver(callback, options);
observer.observe(trophyImg);
observer.observe(stadiumImg);

// achievement p API
const achieveP1 = document.getElementById('achieveP1');
const achieveP2 = document.getElementById('achieveP2');
const stadiumP1 = document.getElementById('stadiumP1');
const stadiumP2 = document.getElementById('stadiumP2');

function callback(entriesP) {
  if (entriesP[0].isIntersecting) {
    entriesP[0].target.classList.add('appear');
  } else {
    entriesP[0].target.classList.remove('appear');
  }
};

const optionsP = {
  threshold: [0.3]
};

const observer2 = new IntersectionObserver(callback, optionsP);
observer2.observe(achieveP1);
observer2.observe(achieveP2);
observer2.observe(stadiumP1);
observer2.observe(stadiumP2);
