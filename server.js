const express = require('express');
const helmet = require('helmet');

const cors = require('cors');

const server = express();
server.use(cors());
// server.options('*', cors());
server.use(express.json());

server.use(helmet());

const actionRouter = require("./data/actionRouter.js");
const projectRouter = require("./data/projectRouter.js");


server.use('/api/actions', actionRouter);
server.use('/api/projects',projectRouter);

server.get('/', (req, res) => {
    res.status(200).json({message: 'the server running'})
})



module.exports = server;