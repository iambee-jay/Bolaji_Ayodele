function toggleMenu() {
  const menu = document.querySelector(".menu_links");
  const icon = document.querySelector(".hamburger_icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

//Dark / Light Mode

const btn = document.getElementById("modeToggle");
const btn2 = document.getElementById("modeToggle2");
const themeIcons = document.querySelectorAll(".icon");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  setDarkMode();
}

btn.addEventListener("click", function () {
  setTheme();
});

btn2.addEventListener("click", function () {
  setTheme();
});

function setTheme() {
  let currentTheme = document.body.getAttribute("theme");

  if (currentTheme === "dark") {
    // some logic to set the light mode
    setLightMode();
  } else {
    // some logic to set the dark mode
    setDarkMode();
  }
}

function setDarkMode() {
  // soem logic to set the dark mode
  document.body.setAttribute("theme", "dark");
  localStorage.setItem("theme", "dark");

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-dark");
  });
}

function setLightMode() {
  // soem logic to set the dark mode
  document.body.removeAttribute("theme");
  localStorage.setItem("theme", "light");

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-light");
  });
}
