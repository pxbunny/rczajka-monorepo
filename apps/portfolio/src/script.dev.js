[
  ...document.querySelectorAll('*[data-env="production" i]'),
  ...document.querySelectorAll('*[data-env="prod" i]'),
].forEach((el) => el.remove());
