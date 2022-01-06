const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hi everyone!');
});

app.get('/product', (req, res) => {
  res.json([
    {
      id: 1,
      name: 'Product One',
      price: 150000,
    },
    {
      id: 2,
      name: 'Product Two',
      price: 10000,
    },
  ]);
});

app.get('/product/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    id,
    name: 'Product #' + id,
    price: 10000,
  });
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;

  res.json({
    categoryId,
    productId,
  });
});

app.listen(3000);
