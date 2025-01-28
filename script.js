window.addEventListener('load', () => {
  // Remove the loading screen after the page loads
  const loading = document.getElementById('loading');
  loading.style.display = 'none';
});

const darkModeToggle = document.getElementById('darkModeToggle');
const darkModeIcon = document.getElementById('darkModeIcon');

// Toggle Dark Mode
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    document.documentElement.style.setProperty('--background-color', '#121212');
    document.documentElement.style.setProperty('--text-color', '#ffffff');
    document.documentElement.style.setProperty('--header-background', '#333');
    darkModeIcon.classList.replace('fa-sun', 'fa-moon');
  } else {
    document.documentElement.style.setProperty('--background-color', '#f5f5f5');
    document.documentElement.style.setProperty('--text-color', '#333');
    document.documentElement.style.setProperty('--header-background', '#007bff');
    darkModeIcon.classList.replace('fa-moon', 'fa-sun');
  }
});
