import express from 'express';
import morgan from 'morgan';

const app = express();
const { PORT = 9000 } = process.env;

app.use(morgan('combined')); // HTTP logging middleware.

app.get('*', (req, res) => {
  res.redirect('https://www.etsy.com/shop/InkLaneDesign');
});

const server = app.listen(PORT, () => {
  const {port} = server.address();
  console.log(`Listening on port ${port}`);
});
