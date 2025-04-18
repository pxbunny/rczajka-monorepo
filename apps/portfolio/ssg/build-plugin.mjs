import * as cheerio from 'cheerio';

export default function buildPlugin() {
  return {
    transformIndexHtml(html) {
      const $ = cheerio.load(html);
      removeComments($);
      return removeEmptyLines($.html());
    }
  }
}

function removeComments($) {
  $('*').contents()
    .filter((_, node) => node.type === 'comment')
    .remove();
}

function removeEmptyLines(html) {
  return html.replace(/^\s*[\r\n]/gm, '');
}
