const navItems = document.getElementById("nav-item-right");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  navItems.classList.toggle("show");
  console.log(navItems.classList);
});
