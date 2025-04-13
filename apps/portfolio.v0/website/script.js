import data from './data.json';

function handleLoader() {
  setTimeout(() => {
    const loader = document.querySelector('.loader');
    loader.classList.add('loader--hidden');
    setTimeout(() => loader.remove(), 3000);
  }, 500);
}

function setSocialLinks(socials) {
  const template = document.querySelector('#social-list-item-template');
  const fragment = document.createDocumentFragment();

  socials.forEach(({ url, icon }) => {
    const clone = template.content.cloneNode(true);
    clone.querySelector('.socials__link').setAttribute('href', url);
    clone.querySelector('i').setAttribute('class', icon);
    fragment.appendChild(clone);
  });

  document.querySelectorAll('.socials').forEach((socials) => {
    const clone = fragment.cloneNode(true);
    socials.appendChild(clone);
  });
}

function setCarousel(technologies) {
  const template = document.querySelector('#carousel-item-template');
  const fragment = document.createDocumentFragment();

  technologies.forEach(({ icon }) => {
    const clone = template.content.cloneNode(true);
    clone.querySelector('i').setAttribute('class', icon);
    fragment.appendChild(clone);
  });

  const carousel = document.querySelector('.carousel');
  const carouselinner = carousel.querySelector('.carousel__inner');
  carouselinner.appendChild(fragment);

  const screenWidth = window.screen.width;
  const innerWidth = carouselinner.offsetWidth;
  const numberOfInnerItems = Math.ceil(screenWidth / innerWidth);

  for (let i = 0; i < numberOfInnerItems; i++) {
    const clone = carouselinner.cloneNode(true);
    carousel.appendChild(clone);
  }
}

setSocialLinks(data.socials);
setCarousel(data.technologies);
handleLoader();
