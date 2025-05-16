// Inspecalytics - script.js

document.addEventListener('DOMContentLoaded', function() {
    console.log("Inspecalytics website scripts loaded.");

    // Smooth scrolling for anchor links (optional)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const hrefAttribute = this.getAttribute('href');
            if (hrefAttribute.length > 1 && document.querySelector(hrefAttribute)) {
                 e.preventDefault();
                document.querySelector(hrefAttribute).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Handle Demo Request Form Submission (Placeholder)
    const demoForm = document.getElementById('demoRequestForm');
    if (demoForm) {
        demoForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent actual submission for now
            alert("Demo request form submitted (placeholder). You would typically send this data to a server.");
            // In a real application, you would collect form data and send it via AJAX/Fetch
            // For example:
            // const formData = new FormData(demoForm);
            // fetch('/api/request-demo', { method: 'POST', body: formData })
            // .then(response => response.json())
            // .then(data => console.log(data))
            // .catch(error => console.error('Error:', error));
            demoForm.reset();
        });
    }

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