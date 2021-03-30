var toggle = document.getElementById("btn-toggle");
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");

var storedTheme =
  localStorage.getItem("theme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");
if (storedTheme)
  document.documentElement.setAttribute("data-theme", storedTheme);

toggle.onclick = function () {
  var currentTheme = document.documentElement.getAttribute("data-theme");
  var targetTheme = "light";

  if (currentTheme === "light") {
    targetTheme = "dark";
    moon.classList.add("d-none");
    sun.classList.remove("d-none");
  } else {
    sun.classList.add("d-none");
    moon.classList.remove("d-none");
  }

  document.documentElement.setAttribute("data-theme", targetTheme);
  localStorage.setItem("theme", targetTheme);
};
