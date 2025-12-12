// Inspecalytics - script.js

// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS with improved settings
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: false, // Allow animations to repeat
        mirror: true, // Mirror animations on scroll up
        offset: 50, // Start animation earlier
        delay: 0, // No delay between animations
        anchorPlacement: 'top-bottom' // Trigger animation when top of element reaches bottom of window
    });

    // Refresh AOS on window resize
    window.addEventListener('resize', function() {
        AOS.refresh();
    });

    // Smooth scroll for anchor links
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

    // Parallax effect for hero section
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            heroSection.style.backgroundPositionY = scrolled * 0.5 + 'px';
        });
    }

    // Animate numbers in stats
    const animateValue = (element, start, end, duration) => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            element.textContent = value + (element.textContent.includes('+') ? '+' : '');
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };

    // Intersection Observer for stats animation
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    const value = parseInt(stat.textContent);
                    animateValue(stat, 0, value, 2000);
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    // Observe stats section
    const statsSection = document.querySelector('.hero-stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }

    // Add hover effect to feature items
    document.querySelectorAll('.feature-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-10px)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0)';
        });
    });

    // Add hover effect to feature icons
    document.querySelectorAll('.feature-item img').forEach(icon => {
        icon.addEventListener('mouseover', () => {
            icon.style.transform = 'scale(1.1) rotate(5deg)';
        });
        icon.addEventListener('mouseout', () => {
            icon.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    // Add loading animation to buttons (except form submit buttons)
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(e) {
            // Skip if it's a form submit button or secondary button
            if (!this.classList.contains('btn-secondary') && this.type !== 'submit') {
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
                
                // Reset button text after animation
                setTimeout(() => {
                    this.innerHTML = originalText;
                }, 1000);
            }
        });
    });

    // Waitlist form is handled by embedded Microsoft Forms
    // Responses automatically save to Excel in OneDrive

    // Handle Newsletter Form Submission
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            alert(`Newsletter subscription for ${emailInput.value} submitted (placeholder).`);
            newsletterForm.reset();
        });
    }

    // TODO: Add more interactive features as needed:
    // - Testimonial slider functionality
    // - Active navigation link highlighting based on scroll or page
    // - Mobile navigation toggle
    // - Live chat integration logic (if any client-side setup is needed)
}); 