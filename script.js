// Toggle the navigation menu on hamburger click
document.getElementById("nav-toggle").addEventListener("click", function () {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.toggle("open");
});

// Smooth scroll function (optional)
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

const contactForm = document.getElementById("contact-form"),
  contactName = document.getElementById("contact-name"),
  contactEmail = document.getElementById("contact-email"),
  contactCompany = document.getElementById("contact-company"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  // Check if the field has a value
  if (
    contactName.value === "" ||
    contactEmail.value === "" ||
    contactCompany.value === "" ||
    contactMessage.value === ""
  ) {
    // Add and remove color
    // contactMessage.classList.remove("color-blue");
    // contactMessage.classList.remove("color-red");
    // Show message
    // contactMessage.textContent = "Write all the input fields 📩";
  } else {
    // serviceID - templateID - #form - publicKey
    emailjs
      .sendForm(
        "service_r2qdd4b",
        "template_toj1cyv",
        "#contact-form",
        "jUckNmHOjsAWz8Zka"
      )
      .then(
        () => {
          // Show message and add color
          // contactMessage.classList.add("color-blue");
          // contactMessage.textContent = "Message Sent ✅";
          alert("Message Sent ✅");

          // Remove message after five seconds
          // setTimeout(() => {
          //   // contactMessage.textContent = "";
          // }, 5000);
        },
        (error) => {
          alert("OOPS! SOMETHING HAS FAILED...", error);
        }
      );

    //To clear the input field
    contactName.value = "";
    contactEmail.value = "";
    contactCompany.value = "";
    contactMessage.value = "";
  }
};
contactForm.addEventListener("submit", sendEmail);
