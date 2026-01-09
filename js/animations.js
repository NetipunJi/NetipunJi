/* Animations Logic */

class ScrollManager {
    constructor() {
        this.observerOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        };
        this.parallaxElements = document.querySelectorAll('[data-speed]');
        this.animateElements = document.querySelectorAll('[data-animate]');
        
        this.init();
    }

    init() {
        this.setupIntersectionObserver();
        this.setupParallax();
        this.setupSmoothScroll();
    }

    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Stop observing once visible to avoid re-triggering
                    observer.unobserve(entry.target);
                }
            });
        }, this.observerOptions);

        this.animateElements.forEach(el => observer.observe(el));
    }

    setupParallax() {
        // Simple rAF based parallax
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            
            this.parallaxElements.forEach(el => {
                const speed = parseFloat(el.getAttribute('data-speed')) || 0.5;
                const limit = el.getAttribute('data-limit') || 1000;
                
                if (scrolled < limit) {
                    const yPos = -(scrolled * speed);
                    el.style.transform = `translate(-50%, calc(-50% + ${yPos}px))`;
                }
            });
        });
    }

    setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Header offset
                    const headerOffset = 80; 
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            });
        });
    }
}

// Global styles for animations need to be injected or present in CSS
// We'll add a helper to inject the class styles if they are missing, 
// but ideally they are in style.css. 
// For now, let's assume specific CSS classes handle the visual transition.

document.addEventListener('DOMContentLoaded', () => {
    window.scrollManager = new ScrollManager();
    console.log('Scroll Manager Initialized');
});

