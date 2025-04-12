import path from 'path';

import connectLiveReload from 'connect-livereload';
import { createServer } from 'livereload';
import express from 'express';

const PORT = 3001;
const __dirname = path.resolve();

const liveReloadServer = createServer();
liveReloadServer.server.once('connection', () => {
  setTimeout(() => {
    liveReloadServer.refresh('/');
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
