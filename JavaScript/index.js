document.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll('.content-section, .content ul');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  targets.forEach(target => {
    observer.observe(target);
  });
});