# script.md

  <meta name="color-scheme" content="dark light">
  :root {
  --background-color: #212529; /* Dark background */
  --text-color: white; /* White text */
}

.dark-mode {
 background-color: var(--background-color);
}

body {
  color: var(--text-color);
}
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

function setTheme() {
  if (prefersDarkScheme.matches) {
    document.documentElement.classList.add("dark-mode");
  } else {
    document.documentElement.classList.remove("dark-mode");
  }