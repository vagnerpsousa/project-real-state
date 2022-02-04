const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');
const customerController = require('./controllers/customerController');
const { error } = require('./middlewares');

const app = express();

app.use(bodyParser.json());

app.use(express.json());

app.use('/customer', rescue(customerController));
app.use(error);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

app.get('/', (request, response) => {
  response.send();
});