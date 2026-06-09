 
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

    document.addEventListener('DOMContentLoaded', function() {
      // Get all the circle elements and content elements
      const circles = document.querySelectorAll('.news-circle');
      const contents = document.querySelectorAll('.news-content');
      
      // Add hover events to each circle
      circles.forEach(circle => {
        const targetId = circle.getAttribute('data-target');
        const targetContent = document.getElementById(targetId);
        
        // When mouse enters the circle
        circle.addEventListener('mouseenter', function() {
          // Hide all contents first
          contents.forEach(content => {
            content.style.opacity = "0";
            content.style.visibility = "hidden";
          });
          
          // Show the target content
          if (targetContent) {
            targetContent.style.opacity = "1";
            targetContent.style.visibility = "visible";
            
            // Expand the circle
            circle.querySelector('.news-image-circle').style.width = "300px";
            circle.querySelector('.news-image-circle').style.height = "300px";
          }
        });
        
        // Also handle mouse entering the content area
        if (targetContent) {
          targetContent.addEventListener('mouseenter', function() {
            // Keep content visible
            targetContent.style.opacity = "1";
            targetContent.style.visibility = "visible";
            
            // Keep the circle expanded
            circle.querySelector('.news-image-circle').style.width = "300px";
            circle.querySelector('.news-image-circle').style.height = "300px";
          });
          
          // Handle mouse leaving the content area
          targetContent.addEventListener('mouseleave', function() {
            // Only hide if not hovering the circle
            const isHoveringCircle = circle.matches(':hover');
            if (!isHoveringCircle) {
              targetContent.style.opacity = "0";
              targetContent.style.visibility = "hidden";
              
              // Shrink the circle
              circle.querySelector('.news-image-circle').style.width = "200px";
              circle.querySelector('.news-image-circle').style.height = "200px";
            }
          });
        }
        
        // Handle mouse leaving the circle
        circle.addEventListener('mouseleave', function() {
          // Check if hovering over the content
          const isHoveringContent = targetContent && targetContent.matches(':hover');
          
          // Only hide content and shrink circle if not hovering the content
          if (!isHoveringContent) {
            if (targetContent) {
              targetContent.style.opacity = "0";
              targetContent.style.visibility = "hidden";
            }
            
            // Shrink the circle
            circle.querySelector('.news-image-circle').style.width = "200px";
            circle.querySelector('.news-image-circle').style.height = "200px";
          }
        });
      });
      
      // When mouse leaves the entire news section
      document.querySelector('.news-section').addEventListener('mouseleave', function() {
        // Hide all contents
        contents.forEach(content => {
          content.style.opacity = "0";
          content.style.visibility = "hidden";
        });
        
        // Reset all circles to normal size
        circles.forEach(circle => {
          circle.querySelector('.news-image-circle').style.width = "200px";
          circle.querySelector('.news-image-circle').style.height = "200px";
        });
      });
    });
