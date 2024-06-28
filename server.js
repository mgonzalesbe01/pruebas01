const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

let products = [];

app.get('/products', (req, res) => {
  res.json(products);
});

app.post('/products', (req, res) => {
  const product = req.body;
  products.push(product);
  res.status(201).json(product);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
