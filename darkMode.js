const toggleBtn = document.getElementById('darkModeToggle');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleBtn.classList.toggle('dark');
});