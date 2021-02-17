
'use strict';

const PORT = process.env.PORT;
require('dotenv').config();
const server = require('./src/server.js');

server.start(PORT);