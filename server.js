const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const recipeRouter = require('./router/recipe-router.js');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(logger)

server.use('/api/recipes', recipeRouter);

function logger(req, res, next) {
    const method = req.method;
    const url = req.url;
    const timestamp = Date.now();
    console.log(`${method} request to '${url}' at ${timestamp}`);
    next()
};

server.get('/', (req, res) => {
    res.status(200).json({ Dustin: "it's working!" })
});

module.exports = server;