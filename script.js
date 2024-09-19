// Smooth scroll function
function scrollToSection(section) {
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
}

// Contact form submission alert
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent actual form submission for demo
    alert('Thank you for contacting us! We will get back to you soon.');
});
