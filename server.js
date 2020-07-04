const app = require('./app');
const config = require('config');
console.log(config.app.port);
module.exports = app.listen(process.env.PORT || config.app.port, process.env.HOST || config.app.host);
