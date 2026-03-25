// Loading Screen
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
        }, 2000);
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

// Select all sections and elements to animate
window.addEventListener('DOMContentLoaded', () => {
    // Scroll animations
    document.querySelectorAll('section, footer').forEach((el) => {
        el.classList.add('hidden-scroll');
        observer.observe(el);
    });

    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    });

    // Close menu when a nav link is clicked
    navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
    });
});
