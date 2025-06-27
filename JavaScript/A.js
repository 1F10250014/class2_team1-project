document.addEventListener('DOMContentLoaded', function() {

    const targets = document.querySelectorAll('.content-section');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.1
    });

    targets.forEach(target => {
        observer.observe(target);
    });

});