import express from 'express';

const app = express();
app.get('/', (req, res) => {
  console.log('got request');
  res.send(`Hello world`);
});

const server = app.listen(8081, () => {
  const {port} = server.address();

  console.log(`Listening on port ${port}`);
});
