document.addEventListener("DOMContentLoaded", function () {
  const nav = document.getElementById('navMenu');
  const btn = document.getElementById('toggleBtn');

  btn.addEventListener("click", function () {
    nav.classList.toggle('show');
    btn.classList.toggle('rotate');
  });
});
