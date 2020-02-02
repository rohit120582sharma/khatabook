const express = require('express');

const setMiddleware = require('./middlewares/middleware');
const userRouter = require('./resources/user/router');

const server = express();

/**
 * Setup middlewares
 */
setMiddleware(server);

/**
 * Routing
 */
server.use('/user', userRouter);
// Error handler
server.use(function(err, req, res, next) {
    res.status(404).send(err);
});

// Server is listening on port : 3000
server.listen(3000, () => {
    console.log('Server gets started successfully!');
});

module.exports = server;
