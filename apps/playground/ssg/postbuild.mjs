import fs from 'fs';
import { htmlPath, tmpHtmlPath } from './paths.mjs';

if (!fs.existsSync(htmlPath) && fs.existsSync(tmpHtmlPath)) {
  fs.renameSync(tmpHtmlPath, htmlPath);
  exit(1);
}

fs.unlinkSync(htmlPath);
fs.renameSync(tmpHtmlPath, htmlPath);
