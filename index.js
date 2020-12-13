const express = require('express')

const app = express();

app.use('/', (req, res, next) => {
  res.status(200).send('aaaaa')
})


app.listen(3000, () => {
  console.log('App is runnig');
})