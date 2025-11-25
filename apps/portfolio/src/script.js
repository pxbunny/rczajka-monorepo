(() => {
  function hideLoader(removeTimeoutMs = 5000) {
    const loader = document.querySelector('.loader');
    loader?.classList.add('loader--hidden');
    setTimeout(() => loader?.remove(), removeTimeoutMs);
  }

  window.addEventListener('load', () => {
    hideLoader();
  });
})();


