// Hamburger menu toggle for mobile navigation and theme toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  // Hamburger Menu Toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
  }

  // Theme Toggle Functionality
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    // Check localStorage for saved theme
    let currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'bw') {
      document.body.classList.add('bw-mode');
      themeToggle.textContent = "Hacker Mode";
    } else {
      themeToggle.textContent = "Black & White";
    }
    themeToggle.addEventListener('click', function() {
      if (document.body.classList.contains('bw-mode')) {
        document.body.classList.remove('bw-mode');
        localStorage.setItem('theme', 'hacker');
        themeToggle.textContent = "Black & White";
      } else {
        document.body.classList.add('bw-mode');
        localStorage.setItem('theme', 'bw');
        themeToggle.textContent = "Hacker Mode";
      }
    });
  }
});
