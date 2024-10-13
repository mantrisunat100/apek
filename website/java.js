console.log("Barokah Makmur Perkasa");

window.onscroll = function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
};

function togglePhoneNumber(event) {
    event.preventDefault(); // Mencegah tautan default
    const phoneNumberDiv = document.getElementById("phone-number");
    if (phoneNumberDiv.style.display === "none") {
        phoneNumberDiv.style.display = "block";
    } else {
        phoneNumberDiv.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('dark-mode-toggle');
    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
});