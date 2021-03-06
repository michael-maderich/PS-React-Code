const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
})

app.get('/index', (req, res) => {
    res.send(`<h1>We're on the index page!`);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})