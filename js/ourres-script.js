// Function to check if element is in viewport and add 'visible' class
const observeElements = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Add 'visible' class when element comes into view
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Once animation is triggered, we can stop observing this element
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,       // viewport
        threshold: 0.15,  // element is 15% visible
        rootMargin: '0px 0px -50px 0px' // trigger a bit before element comes into view
    });

    // Observe all restaurant sections and dividers
    document.querySelectorAll('.restaurant-section, .restaurant-divider').forEach(element => {
        observer.observe(element);
    });
};

// Run after page is loaded
document.addEventListener('DOMContentLoaded', observeElements);