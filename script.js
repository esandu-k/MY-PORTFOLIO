
// Loading Screen
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    // Hide loading screen after page fully loads
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 2000); // 2 second delay for smooth transition
});

// Scroll Animations using Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-on-scroll');
        } else {
            // Optional: remove to animate out
            entry.target.classList.remove('show-on-scroll');
        }
    });
}, { threshold: 0.15, rootMargin: '0px' });

// Select all sections and elements to animate
window.addEventListener('DOMContentLoaded', () => {
    // Scroll animations
    document.querySelectorAll('section, footer').forEach((el) => {
        el.classList.add('hidden-scroll');
        observer.observe(el);
    });

    // Letter-by-letter fade in animation for the logo
    const logo = document.querySelector('.nav-logo');
    if (logo) {
        const text = logo.textContent;
        logo.textContent = '';
        [...text].forEach((char, i) => {
            let span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.animationDelay = `${i * 0.1}s`;
            logo.appendChild(span);
        });
    }
});
