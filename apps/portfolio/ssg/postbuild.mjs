import fs from 'fs';
import { htmlPath, tmpHtmlPath } from './paths.mjs';

fs.unlinkSync(htmlPath);
fs.renameSync(tmpHtmlPath, htmlPath);
