import { load } from 'cheerio';

export default function buildPlugin(handleAdditionalScripts) {
  return {
    transformIndexHtml(html) {
      const $ = load(html);
      handleAdditionalScripts && handleAdditionalScripts($);
      removeComments($);
      removeCustomAttributes($);
      return removeEmptyLines($.html());
    }
  }
}

function removeComments($) {
  $('*').contents()
    .filter((_, node) => node.type === 'comment')
    .remove();
}

function removeCustomAttributes($) {
  const prefix = 'data-';
  $('*').each((_, el) => {
    Object.keys(el.attribs)
      .filter(key => key.startsWith(prefix))
      .forEach(key => delete el.attribs[key]);
  });
}

function removeEmptyLines(html) {
  return html.replace(/^\s*[\r\n]/gm, '');
}
