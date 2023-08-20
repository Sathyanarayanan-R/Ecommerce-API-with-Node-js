require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const keys = require('./config/keys');
const routes = require('./routes');
const setupDB = require('./utils/db');

const { port } = keys;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  helmet({
    contentSecurityPolicy: false,
    frameguard: true
  })
);
app.use(cors());

setupDB();

require('./config/passport')(app);
app.use(routes);

app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
});