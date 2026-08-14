// Welcome message
console.log("Welcome to Ayad Tihfe Portfolio!");

// Portfolio buttons
const projectButtons = document.querySelectorAll(".project button");

projectButtons.forEach((button) => {
    button.addEventListener("click", () => {
        alert("Project details will be available soon.");
    });
});

// Contact button
const contactButton = document.querySelector("#contact .button");

contactButton.addEventListener("click", () => {
    console.log("Contact button clicked");
});