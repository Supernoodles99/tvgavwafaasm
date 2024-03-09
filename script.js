let darkMode = localStorage.getItem("darkMode");
const darkToggle = document.getElementById("darkModeToggle")
if (darkMode == "true") {
  document.body.classList.add("darkMode");
}

function toggleDarkMode() {
  darkMode = !darkMode;
  if (darkMode) {
    localStorage.setItem("darkMode", "true");
    document.body.classList.add("darkMode");
  } else {
    localStorage.setItem("darkMode", "false");
    document.body.classList.remove("darkMode");
  }
}

darkToggle.addEventListener("click", toggleDarkMode);
