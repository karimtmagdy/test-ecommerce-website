// ^ Toggle Dark Mode
const body = document.querySelector("body"),
  header = document.querySelector("header"),
  toggleSwitch = document.getElementById("toggleSwitch");
toggleSwitch.onclick = function () {
  body.classList.toggle("active"),
    header.classList.toggle("active"),
    toggleSwitch.classList.toggle("active");
};
// ^ Toggle Navigation
const toggleMenu = document.getElementById("toggleMenu"),
  ul = document.querySelector("ul");
toggleMenu.onclick = function () {
  toggleMenu.classList.toggle("active"), ul.classList.toggle("active");
};
// ^ Toggle Scroll Top
const scrollTop = document.getElementById("scrollTop");
(window.onscroll = function () {
  window.scrollY >= 600
    ? (scrollTop.style.display = "block")
    : (scrollTop.style.display = "none");
}),
  (scrollTop.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
// ^ Local Storage
