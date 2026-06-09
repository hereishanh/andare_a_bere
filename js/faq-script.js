document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        const mainContent = document.querySelector('.main-content');
        if (mainContent) {
            mainContent.classList.add('visible');
        }
    }, 100);
});