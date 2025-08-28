const body = document.getElementById("body");
const toggleDarkMode = () => {
  body.classList.toggle("dark-mode");
};
body.addEventListener("click", toggleDarkMode);
