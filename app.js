const toggle = document.getElementById("btn-toggle");
const lightModeBtn = document.querySelector(".light-mode-button");
const darkModeBtn = document.querySelector(".dark-mode-button");

const getStoredTheme = () => {
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme) {
    return storedTheme;
  }
  const mediaMatches = window.matchMedia("(prefers-color-scheme: dark)")
    .matches;
  if (mediaMatches) {
    return "dark";
  }
  return "light";
};

const storedTheme = getStoredTheme();
if (storedTheme)
  document.documentElement.setAttribute("data-theme", storedTheme);

toggle.addEventListener("click", addingClasses);

function addingClasses() {
  var currentTheme = document.documentElement.getAttribute("data-theme");
  let targetTheme = "light";

  if (currentTheme === "light") {
    targetTheme = "dark";
    darkModeBtn.classList.add("d-none");
    lightModeBtn.classList.remove("d-none");
  } else {
    lightModeBtn.classList.add("d-none");
    darkModeBtn.classList.remove("d-none");
  }

  document.documentElement.setAttribute("data-theme", targetTheme);
  localStorage.setItem("theme", targetTheme);
}
