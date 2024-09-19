// Contact form submission alert
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // prevent actual form submission for demo
  alert("Thank you for contacting us! We will get back to you soon.");
});

// Toggle the navigation menu on hamburger click
document.getElementById("nav-toggle").addEventListener("click", function () {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.toggle("open");
});

// Smooth scroll function (optional)
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}
