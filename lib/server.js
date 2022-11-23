import express from 'express';
import config from './config';
import data from './test-data.json';

const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {answer: 50});
});

app.get('/data', (req, res) => {
  res.send(data);
});

app.listen(config.port, () => {
  console.log(`Listening on port ${config.port}`);
});
