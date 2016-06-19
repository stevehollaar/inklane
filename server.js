import express from 'express';
import moment from 'moment';
import morgan from 'morgan';
// import redis from 'redis';
// import r from 'rethinkdb';

const app = express();
// const redisClient = redis.createClient();
const { PORT = 9000 } = process.env;

app.use(morgan('combined')); // HTTP logging middleware.

// r.connect({host: 'localhost', port: 28015}, (err, conn) => {
//   if (err) throw err;
//   console.log('Connected to rethinkdb');
// });

// redisClient.on('error', console.error);
//

app.get('*', (req, res) => {
  res.redirect('https://www.etsy.com/shop/InkLaneDesign');
});

// app.get('/', (req, res) => {
//   console.log('got request');
//   const date = moment().format();
//   res.send(`Hello world ${date}`);
// });

const server = app.listen(PORT, () => {
  const {port} = server.address();

  console.log(`Listening on port ${port}`);
});
