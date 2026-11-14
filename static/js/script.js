
// B2B Trading - Website JavaScript

document.addEventListener("DOMContentLoaded", function () {

    console.log("B2B Trading website loaded successfully!");

    // Smooth navigation
    const navigationLinks = document.querySelectorAll(
        '.navbar a[href^="#"]'
    );

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");
            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });

    });

});

// MOBILE NAVIGATION MENU

const menuToggle = document.getElementById("menuToggle");
const navbar = document.querySelector(".navbar");

if (menuToggle && navbar) {
    menuToggle.addEventListener("click", function () {
        navbar.classList.toggle("active");

        if (navbar.classList.contains("active")) {
            menuToggle.innerHTML = "✕";
            menuToggle.setAttribute("aria-label", "Close navigation menu");
        } else {
            menuToggle.innerHTML = "☰";
            menuToggle.setAttribute("aria-label", "Open navigation menu");
        }
    });

    // Close menu after clicking a navigation link
    navbar.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navbar.classList.remove("active");
            menuToggle.innerHTML = "☰";
            menuToggle.setAttribute("aria-label", "Open navigation menu");
        });
    });
}
