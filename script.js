/*
 * Main JavaScript for the Portfolio Website
 * Handles smooth scrolling for internal navigation links and basic
 * client-side form submission feedback for the contact form. Feel free
 * to extend this file with additional interactivity as your website
 * grows.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for internal anchors in the navigation menu
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Simple form submission handler for the contact form
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            // Provide user feedback; in a real site you would send the data to a backend
            alert('Thank you for your message! I will get back to you soon.');
            form.reset();
        });
    }
});