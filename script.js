// Loading Screen
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        setTimeout(function() {
            loadingScreen.classList.add('hidden');
        }, 1500);
    }
});

// Scroll Animations using Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-on-scroll');
        } else {
            entry.target.classList.remove('show-on-scroll');
        }
    });
}, { threshold: 0.15, rootMargin: '0px' });

// Initialize animations on page load
window.addEventListener('DOMContentLoaded', function() {
    // Scroll animations for sections
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

    // Hamburger Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
});
