import express from 'express';
import moment from 'moment';

const app = express();
const {PORT} = process.env;

app.get('/', (req, res) => {
  console.log('got request');
  const date = moment().format();
  res.send(`Hello world ${date}`);
});

const server = app.listen(PORT, () => {
  const {port} = server.address();

  console.log(`Listening on port ${port}`);
});
