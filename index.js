require('dotenv/config');
const express = require('express');
const PlansController = require('./controllers/plansController');

const app = express();

app.use(express.json());

app.use('/plans', PlansController);

app.listen(process.env.PORT, () => {
  console.log('Online');
})