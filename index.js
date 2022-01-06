const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hi everyone!')
})

app.get('/product', (req, res) => {
  res.json({
    id: 1,
    name: 'Product One',
    price: 150000
  })
})

app.listen(3000)
