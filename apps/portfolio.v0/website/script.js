setTimeout(() => {
  const loader = document.querySelector('.loader');
  loader.classList.add('loader--hidden');
  setTimeout(() => loader.remove(), 3000);
}, 500);
