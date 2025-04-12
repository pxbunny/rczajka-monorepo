import connectLiveReload from 'connect-livereload';
import express from 'express';
import { createServer } from 'livereload';
import path from 'path';

const PORT = 3001;
const __dirname = path.resolve();

createServer().server.once('connection', server => {
  setTimeout(() => {
    server.refresh('/');
  }, 100);
});

const app = express();

app.use(connectLiveReload());

app.use(express.static(__dirname + '/website'));

app.get('/', (_, res) => {
  res.sendFile(__dirname + '/website/index.html');
});

app.listen(PORT, () => {
  console.log(`Server is running: http://localhost:${PORT}`);
});
