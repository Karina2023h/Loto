  const icons = document.querySelectorAll('.icon');

icons.forEach(icon => {
  icon.addEventListener('click', function () {
    // зняти active з усіх
    icons.forEach(i => i.classList.remove('active'));
    // додати active на поточну
    this.classList.add('active');
  });
});