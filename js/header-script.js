document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('header--scrolled');
        } else {
            header.classList.remove('header--scrolled');
        }
    });
    
    // Mobile menu toggle
    const mobileToggle = document.querySelector('.header__mobile-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileNavClose = document.querySelector('.mobile-nav__close');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            mobileNav.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    
    if (mobileNavClose) {
        mobileNavClose.addEventListener('click', function() {
            mobileNav.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    
    // Close mobile nav when clicking outside
    document.addEventListener('click', function(event) {
        if (mobileNav.classList.contains('active') && 
            !event.target.closest('.mobile-nav__container') && 
            !event.target.closest('.header__mobile-toggle')) {
            mobileNav.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});