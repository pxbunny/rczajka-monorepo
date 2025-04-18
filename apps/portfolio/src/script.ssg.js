import { load } from 'cheerio';
import data from './data.json';

export function buildContent($) {
  setSocialLinks($);
}

function setSocialLinks($) {
  const { socials } = data;

  const item = loadTemplateContent($, '#social-list-item-template', true);
  const socialsContainer = $('.socials');

  socials.forEach(({ url, icon }) => {
    item('.socials__link').attr('href', url);
    item('i').addClass(icon);
    socialsContainer.append(item.html());
  });
}

function loadTemplateContent($, selector, removeTemplate = false) {
  const template = $(selector);
  const item = load(template.html(), null, false);
  removeTemplate && template.remove();
  return item;
}
