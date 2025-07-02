document.addEventListener("DOMContentLoaded", () => {
  // Select all elements that need to be animated
  const animatedElements = document.querySelectorAll(".animated-image, .animated-text")

  // Options for the Intersection Observer
  const observerOptions = {
    root: null, // Use the viewport as the root
    rootMargin: "0px", // No margin around the root
    threshold: 0.1, // Trigger when 10% of the element is visible
  }

  // Create a new Intersection Observer
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // If the element is in the viewport, add the 'is-visible' class
        entry.target.classList.add("is-visible")
        // Stop observing the element once it's visible
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Observe each animated element
  animatedElements.forEach((element) => {
    observer.observe(element)
  })
})


// Simple animation trigger on scroll
    document.addEventListener('DOMContentLoaded', () => {
      const elements = document.querySelectorAll('.animated-image, .animated-text');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      }, { threshold: 0.1 });
      elements.forEach(element => observer.observe(element));
    });