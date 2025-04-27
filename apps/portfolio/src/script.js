'use strict';

import { shuffle } from './lib/utils';
import data from './data.json';

function hideLoader(removeTimeout = 10) {
  const loader = document.querySelector('.loader');
  loader?.classList.add('loader--hidden');
  setTimeout(() => loader?.remove(), removeTimeout);
}

function setSkillsCarousel(technologies) {
  const getExpectedNumberOfDuplicates = (barWidth) => {
    const windowWidth = window.innerWidth;
    const divider = barWidth ? barWidth : Number.MAX_SAFE_INTEGER;
    return Math.ceil(windowWidth / divider) + 1;
  };

  const shouldBeUpdated = (carousel, expectedNumberOfInnerItems) => {
    return expectedNumberOfInnerItems > carousel.children.length;
  };

  const carousel = document.querySelector('.skills');
  const carouselInner = carousel.querySelector('.skills__inner');
  const expectedNumberOfInnerItems = getExpectedNumberOfDuplicates(carouselInner.offsetWidth);
  const isAlreadyPopulated = carouselInner.children.length > 0;

  if (!shouldBeUpdated(carousel, expectedNumberOfInnerItems)) return;

  if (!isAlreadyPopulated) {
    const template = document.querySelector('#skills-item-template');
    const fragment = document.createDocumentFragment();

    technologies.forEach(({ name, src }) => {
      const clone = template.content.cloneNode(true);
      const img = clone.querySelector('img');
      img.setAttribute('src', src);
      img.setAttribute('alt', name);
      fragment.appendChild(clone);
    });

    carouselInner.appendChild(fragment);
    template.remove();
  }

  for (let i = 1; i < expectedNumberOfInnerItems; i++) {
    const clone = carouselInner.cloneNode(true);
    carousel.appendChild(clone);
  }
}

function handleScrollButtonVisibility() {
  const button = document.querySelector('.scroll-to-top');
  const scrolledToTop = window.scrollY < window.innerHeight / 2;

  if (scrolledToTop) {
    button.classList.remove('scroll-to-top--visible');
    return;
  }

  button.classList.add('scroll-to-top--visible');
}

(function () {
  const { technologies } = data;

  shuffle(technologies);

  const hero = document.querySelector('#hero');
  const animationClass = 'hero--animated';

  let prevScrollY = 0;

  window.addEventListener('load', () => {
    const removeAfterMs = 1000;
    hideLoader(removeAfterMs);

    hero.classList.add(animationClass);
    setSkillsCarousel(technologies);
  });

  window.addEventListener('scroll', () => {
    handleScrollButtonVisibility();

    const fullPageHeight = document.documentElement.scrollHeight;
    const isScrollingUp = window.scrollY < prevScrollY;
    prevScrollY = window.scrollY;

    if (isScrollingUp && window.scrollY < fullPageHeight / 2 ||
        !isScrollingUp && window.scrollY > fullPageHeight / 2) {
      document.documentElement.style.scrollSnapType = 'y';
      return;
    }

    document.documentElement.style.scrollSnapType = '';
  });

  window.addEventListener('resize', () => {
    handleScrollButtonVisibility();
    setSkillsCarousel(technologies);
  });

  new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('services-container--animated');
    });
  }, { rootMargin: '-200px' }).observe(document.querySelector('.services-container'));
})();
