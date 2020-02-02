const morgan = require('morgan');
const bodyParser = require('body-parser');

module.exports = function(server) {
    server.use(morgan('tiny'));

    // parse application/x-www-form-urlencoded
    server.use(bodyParser.urlencoded({ extended: false }));

    // parse application/json
    server.use(bodyParser.json());
}