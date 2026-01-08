
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");
    const body = document.body;

// Open / Close menu
hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");

// Disable background scroll
    if (navMenu.classList.contains("active")) {
        body. style.overflow = "hidden";
    } else {
        body. style.overflow = "auto";
    }
});

// Close menu when clicking a link
document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    body.style.overflow = "auto";
    });
});