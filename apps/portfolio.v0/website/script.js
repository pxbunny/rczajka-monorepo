import { shuffle } from './lib/utils';
import data from './data.json';

function hideLoader() {
    const loader = document.querySelector('.loader');
    loader.classList.add('loader--hidden');
    setTimeout(() => loader.remove(), 3000);
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

    template.remove();
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

    if (!shouldBeUpdated(carousel, expectedNumberOfInnerItems)) return;

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

    for (let i = 1; i < expectedNumberOfInnerItems; i++) {
        const clone = carouselInner.cloneNode(true);
        carousel.appendChild(clone);
    }

    template.remove();
}

function handleScrollButtonVisibility() {
    const button = document.querySelector('.scroll-to-top');
    const scrolledToTop = window.scrollY < window.innerHeight / 2

    if (scrolledToTop) {
        button.classList.remove('scroll-to-top--visible');
        return;
    }

    button.classList.add('scroll-to-top--visible');
}

(function init() {
    const { socials, technologies } = data;

    shuffle(technologies);

    setSocialLinks(socials);
    setSkillsCarousel(technologies);

    window.addEventListener('scroll', () => {
        handleScrollButtonVisibility();
    });

    window.addEventListener('resize', () => {
        handleScrollButtonVisibility();
        setSkillsCarousel(technologies);
    });

    setTimeout(hideLoader, 500);
})();
