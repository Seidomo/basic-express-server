'use strict';

const supertest = require('supertest');
const server = require('../src/logger.js');
const request = supertest(server.app);
