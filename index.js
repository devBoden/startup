const express = require('express')
const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());

app.use(express.static('public'));

var apiRouter = express.Router();
app.use(`/api`, apiRouter);


apiRouter.get('/names', (_req, res) => {
    res.send(names);
  });
  

  apiRouter.post('/names', (req, res) => {
   names.push(req.body.name)
   console.log(names)
    res.send(names);
  });

  app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
  });
  
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });

  let names = [];

