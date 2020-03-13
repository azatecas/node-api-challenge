const express = require('express');
const helmet = require('helmet');
const server = express();

server.use(express.json());
server.use(helmet());


const actionRouter = require("./data/actionRouter.js");


server.use('/api/actions', actionRouter);

server.get('/', (req, res) => {
    res.status(200).json({message: 'the server running'})
})



module.exports = server;