const data = {
  socials: [
    {
      name: 'GitHub',
      url: 'https://github.com/dae-ne',
      icon: 'fa-brands fa-github'
    },
    {
      name: 'Linkedin',
      url: 'https://github.com/dae-ne',
      icon: 'fa-brands fa-linkedin'
    }
  ]
};

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

handleLoader();
setSocialLinks(data.socials);
