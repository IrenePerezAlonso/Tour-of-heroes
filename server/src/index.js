const cors = require('cors');
const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('server');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();

const port = process.env.PORT;
const server = express();

mongoose.connect(process.env.DDBB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

server.use(cors());
server.use(express.json());

server.use(morgan('tiny'));

const heroesRouter = require('./routes/heroesRouter');

server.use('/heroes', heroesRouter);

server.listen(port, () => debug(`Server is running in ${chalk.yellow(`localhost: ${port}`)}`));
