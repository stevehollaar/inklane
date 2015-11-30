import express from 'express';
import moment from 'moment';

const app = express();
app.get('/', (req, res) => {
  console.log('got request');
  const date = moment().format();
  res.send(`Hello world ${date}`);
});

const server = app.listen(8081, () => {
  const {port} = server.address();

  console.log(`Listening on port ${port}`);
});
