// Theme toggle logic for sun-and-moon button
const storageKey = "theme-preference";

const theme = {
  value: getColorPreference(),
};

function getColorPreference() {
  if (localStorage.getItem(storageKey)) {
    return localStorage.getItem(storageKey);
  } else {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
}

function setPreference() {
  localStorage.setItem(storageKey, theme.value);
  reflectPreference();
}

function reflectPreference() {
  document.firstElementChild.setAttribute("data-theme", theme.value);
  document
    .querySelector("#theme-toggle")
    ?.setAttribute("aria-label", theme.value);
  document
    .querySelector("#theme-toggle-mobile")
    ?.setAttribute("aria-label", theme.value);
}

function onClick() {
  theme.value = theme.value === "light" ? "dark" : "light";
  setPreference();
}

// Set early so no page flashes / CSS is made aware
reflectPreference();

window.onload = () => {
  reflectPreference();
  document.querySelector("#theme-toggle")?.addEventListener("click", onClick);
  document
    .querySelector("#theme-toggle-mobile")
    ?.addEventListener("click", onClick);
};

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", ({ matches: isDark }) => {
    theme.value = isDark ? "dark" : "light";
    setPreference();
  });
