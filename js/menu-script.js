// Execute when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Additional script for DESSERT section
    function adjustDessertUnderlines() {
        const prices = document.querySelectorAll('.trangmieng-price');
        
        prices.forEach(price => {
            const width = price.offsetWidth;
            const underline = price.nextElementSibling;
            if (underline && underline.classList.contains('price-underline-dessert')) {
                underline.style.width = width + 'px';
            }
        });
    }
    
    // Call on load and on window resize
    window.addEventListener('load', adjustDessertUnderlines);
    window.addEventListener('resize', adjustDessertUnderlines);
});
// Execute when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Existing script for APPETITE section
    // ...
    
    // Additional script for MAINCOURSE section
    function adjustMaincourseUnderlines() {
        const prices = document.querySelectorAll('.monchinh-price');
        
        prices.forEach(price => {
            const width = price.offsetWidth;
            const underline = price.nextElementSibling;
            if (underline && underline.classList.contains('price-underline-main')) {
                underline.style.width = width + 'px';
            }
        });
    }
    
    // Call on load and on window resize
    window.addEventListener('load', adjustMaincourseUnderlines);
    window.addEventListener('resize', adjustMaincourseUnderlines);
});
// Execute when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Function to adjust price underline width to match price width
    function adjustPriceUnderlines() {
        const prices = document.querySelectorAll('.khaivi-price');
        
        prices.forEach(price => {
            const width = price.offsetWidth;
            const underline = price.nextElementSibling;
            if (underline && underline.classList.contains('price-underline')) {
                underline.style.width = width + 'px';
            }
        });
    }
    
    // Call on load and on window resize
    window.addEventListener('load', adjustPriceUnderlines);
    window.addEventListener('resize', adjustPriceUnderlines);
});

document.addEventListener('DOMContentLoaded', function() {
    // Calculate exact width needed for seamless scrolling
    const imageWidth = 781;
    const imageGap = 35;
    const imageCount = 5;
    const totalMove = imageCount * (imageWidth + imageGap);
    
    // Update the CSS variable with the calculated value
    document.documentElement.style.setProperty('--total-move', totalMove + 'px');
    
    // For browsers that need exact pixel values in the keyframes
    const keyframeRules = `
        @keyframes slideGallery {
            0% {
                transform: translateX(0);
            }
            50% {
                transform: translateX(${totalMove}px);
            }
            50.01% {
                transform: translateX(0);
            }
            100% {
                transform: translateX(${totalMove}px);
            }
        }
    `;
    
    // Create a style element for the keyframes
    const style = document.createElement('style');
    style.innerHTML = keyframeRules;
    document.head.appendChild(style);
    
    // Function to clone images for infinite scrolling
    function ensureInfiniteScroll() {
        const track = document.querySelector('.gallery-track');
        const images = document.querySelectorAll('.gallery-image');
        
        // Add more sets of images as needed based on screen width
        const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        const setsNeeded = Math.ceil(viewportWidth / totalMove) + 1;
        
        // Clone more sets if needed
        if (images.length / imageCount < setsNeeded) {
            for (let i = 0; i < imageCount * setsNeeded; i++) {
                const index = i % imageCount;
                const clone = images[index].cloneNode(true);
                track.appendChild(clone);
            }
        }
    }
    
    // Call once on load and whenever window resizes
    window.addEventListener('load', ensureInfiniteScroll);
    window.addEventListener('resize', ensureInfiniteScroll);
});