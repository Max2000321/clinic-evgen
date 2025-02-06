document.addEventListener('DOMContentLoaded', () => {
  fetch('/api/contact')
    .then(response => response.json())
    .then(data => {
      document.getElementById('phone').textContent = data.phone;
      document.getElementById('instagram').setAttribute('href', data.instagram);
    });
});