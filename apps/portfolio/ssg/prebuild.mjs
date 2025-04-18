import fs from 'fs';
import * as cheerio from 'cheerio';
import { htmlPath, tmpHtmlPath } from './paths.mjs';

fs.renameSync(htmlPath, tmpHtmlPath);

const $ = cheerio.load(fs.readFileSync(tmpHtmlPath, 'utf-8'));

$('[data-env="development" i]').remove();
$('[data-env="dev" i]').remove();

fs.writeFileSync(htmlPath, $.html());
