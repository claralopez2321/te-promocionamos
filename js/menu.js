const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

document.querySelector(".back-to-top").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});