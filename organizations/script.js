document.addEventListener('DOMContentLoaded', () => {
  // Periodic cloud animation
  setInterval(() => {
    const clouds = document.querySelectorAll('.pollution-cloud');
    const randomCloud = clouds[Math.floor(Math.random() * clouds.length)];
    
    randomCloud.style.transform += ' scale(1.1)';
    randomCloud.style.opacity = '1';
    
    setTimeout(() => {
      randomCloud.style.transform = randomCloud.style.transform.replace(' scale(1.1)', '');
      randomCloud.style.opacity = '0.8';
    }, 500);
  }, 3000);

  // Back button navigation
  document.querySelector('.back-button').addEventListener('click', () => {
        window.location.href = '../index.html';
    });
});

