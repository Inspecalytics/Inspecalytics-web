// Inspecalytics - script.js

// Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    // Observe sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Observe feature items
    document.querySelectorAll('.feature-item').forEach(item => {
        observer.observe(item);
    });

    // Observe testimonials
    document.querySelectorAll('.testimonial').forEach(testimonial => {
        observer.observe(testimonial);
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Form validation and animation
    const demoForm = document.getElementById('demoRequestForm');
    if (demoForm) {
        demoForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add your form submission logic here
            const submitButton = demoForm.querySelector('button[type="submit"]');
            submitButton.classList.add('animate-scale-in');
            setTimeout(() => {
                submitButton.classList.remove('animate-scale-in');
            }, 600);
        });
    }

    // Add parallax effect to hero section
    const hero = document.querySelector('#hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
        });
    }

    // Add hover effect to feature icons
    document.querySelectorAll('.feature-item img').forEach(icon => {
        icon.addEventListener('mouseover', () => {
            icon.style.transform = 'scale(1.1) rotate(5deg)';
        });
        icon.addEventListener('mouseout', () => {
            icon.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    // Handle Newsletter Form Submission (Placeholder)
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent actual submission for now
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            alert(`Newsletter subscription for ${emailInput.value} submitted (placeholder).`);
            // Similar to demo form, send data to a server here.
            newsletterForm.reset();
        });
    }

    // TODO: Add more interactive features as needed:
    // - Testimonial slider functionality
    // - Active navigation link highlighting based on scroll or page
    // - Mobile navigation toggle
    // - Live chat integration logic (if any client-side setup is needed)

}); 