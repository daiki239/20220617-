const target = document.getElementById("drawer__menu");
target.addEventListener('click', () => {
  target.classList.toggle('open');
  const nav = document.getElementById("drawer__nav");
  nav.classList.toggle('in');
});