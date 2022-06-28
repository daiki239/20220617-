const target = document.getElementById("drawer__menu");
target.addEventListener('click', () => {
   const target = document.getElementById("drawer__menu");
  target.classList.toggle('open');
  const nav = document.getElementById("drawer__nav");
  nav.classList.toggle('in');
});