document.addEventListener("DOMContentLoaded", () => {
  // Observer for fade sections
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.fade-section').forEach(section => {
    fadeObserver.observe(section);
  });

  // Observer for grid items
  const gridObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        gridObserver.unobserve(entry.target); // Stop observing once visible
      }
    });
  }, { root: null, rootMargin: '0px', threshold: 0.1 });

  document.querySelectorAll('.animated-image, .animated-text').forEach(element => {
    gridObserver.observe(element);
  });

  // Scroll to top button
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add("show");
    } else {
      scrollTopBtn.classList.remove("show");
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // Fish container
  const fishImages = [
    'your-fish1.png',
    'your-fish2.png',
    'your-fish3.png',
    'your-fish4.png',
    'your-fish5.png',
    'your-fish6.png'
  ];

  function createFish() {
    const fish = document.createElement('div');
    fish.className = 'fish';

    const img = document.createElement('img');
    const src = fishImages[Math.floor(Math.random() * fishImages.length)];
    img.src = src;

    const flip = Math.random() > 0.5;
    img.style.transform = flip ? 'scaleX(-1)' : 'scaleX(1)';

    fish.appendChild(img);
    return fish;
  }

  function populateRow(id) {
    const row = document.getElementById(id);
    for (let i = 0; i < 5; i++) {
      row.appendChild(createFish());
    }
  }

  const rows = [
    'top-row-1', 'top-row-2', 'top-row-3',
    'bottom-row-1', 'bottom-row-2', 'bottom-row-3'
  ];
  rows.forEach(populateRow);
});

document.querySelector('.get-involved-btn').addEventListener('click', () => {
  window.location.href = 'organizations/index.html';
});
const audio = document.getElementById('backgroundAudio');
const audioToggleBtn = document.getElementById('audioToggleBtn');

// Устанавливаем зацикливание аудио
audio.loop = true;

// Обработчик клика по кнопке
audioToggleBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.muted = false; // Включаем звук
        audio.play();
        audioToggleBtn.classList.add('playing'); // Иконка становится белой
    } else {
        audio.pause();
        audioToggleBtn.classList.remove('playing'); // Иконка становится черной
    }
});