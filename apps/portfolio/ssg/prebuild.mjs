import fs from 'fs';
import { load } from 'cheerio';
import { htmlPath, tmpHtmlPath } from './paths.mjs';

const file = fs.readFileSync(htmlPath, 'utf-8');
fs.renameSync(htmlPath, tmpHtmlPath);

const $ = load(file);

$('[data-env="development" i]').remove();
$('[data-env="dev" i]').remove();

fs.writeFileSync(htmlPath, $.html());
