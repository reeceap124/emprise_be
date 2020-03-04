const express = require('express');
const server = express();
const helment = require('helmet');
const cors = require('cors');

server.use(express.json());


module.exports = server;