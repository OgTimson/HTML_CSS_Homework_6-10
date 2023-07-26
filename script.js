const burgerButton = document.querySelector(".burger-button");
const sidebarMenu = document.querySelector(".sidebar-menu");

burgerButton.addEventListener("click", () => {
  sidebarMenu.classList.toggle("hidden");
});

const cartButtons = document.querySelectorAll(".cart-button");
const cartCounter = document.querySelector(".cart-counter");

let counter = 0;

cartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    counter++;
    cartCounter.innerText = counter;
  });
});
