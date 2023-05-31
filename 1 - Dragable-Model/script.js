console.log("JS"); // just to test remove it after use
const button = document.querySelector(".show-model");
const overlay = document.querySelector(".sheet-overlay");
const main = document.querySelector(".content");
button.addEventListener("click", () => {
  overlay.classList.toggle("hidden");
  main.classList.toggle("hidden");
  button.style.zIndex = "0";
});
overlay.addEventListener("click", () => {
  overlay.classList.toggle("hidden");
  main.classList.toggle("hidden");
  button.style.zIndex = "1";
});
