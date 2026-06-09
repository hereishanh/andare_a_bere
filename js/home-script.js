document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider-content');
    const slides = document.querySelectorAll('.slider-item');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');
    let currentSlide = 0;

    function goToSlide(index) {
        slider.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
        currentSlide = index;
    }

    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        goToSlide(currentSlide);
    });

    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        goToSlide(currentSlide);
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
    });
});

// Award slider functionality
document.addEventListener('DOMContentLoaded', function() {
    const awardTrack = document.querySelector('.award-track');
    const awardItems = document.querySelectorAll('.award-item');
    const awardDots = document.querySelectorAll('.award-slider .dot');
    const prevBtn = document.querySelector('.award-slider .prev');
    const nextBtn = document.querySelector('.award-slider .next');
    
    const itemsPerView = 6;
    const totalSlides = Math.ceil(awardItems.length / itemsPerView);
    let currentSlide = 0;

    function goToSlide(index) {
        const slideWidth = awardItems[0].offsetWidth + 30; // width + gap
        awardTrack.style.transform = `translateX(-${index * (slideWidth * itemsPerView)}px)`;
        
        // Update dots
        awardDots.forEach(dot => dot.classList.remove('active'));
        awardDots[index].classList.add('active');
        
        currentSlide = index;
    }

    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        goToSlide(currentSlide);
    });

    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        goToSlide(currentSlide);
    });

    awardDots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Wait 500ms before adding the fade-in class
    setTimeout(() => {
        const heroText = document.querySelector('.hero-text');
        if (heroText) {
            heroText.classList.add('fade-in');
        }
    }, 500);
});