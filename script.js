document.addEventListener("DOMContentLoaded", () => {
  // Observer for fade sections (from index.html)
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

  // Observer for grid items (from index2.html)
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
});

