const express = require('express');
const { addUser, getUsers } = require('./database');

const app = express();
const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());
app.use(express.static('public'));

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

var usersRouter = express.Router();
app.use(`/api/users`, usersRouter);

let names = [];
let users = [];

apiRouter.get('/names', (_req, res) => {
    res.send(names);
});

apiRouter.post('/names', (req, res) => {
    names.push(req.body.name);
    console.log(names);
    res.send(names);
});

usersRouter.get('/', async (_req, res) => {
    const users = await getUsers();
    res.send(users);
});

usersRouter.post('/', async (req, res) => {
    const newUser = req.body;
    await addUser(newUser);
    const users = await getUsers();
    res.send(users);
});

app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
