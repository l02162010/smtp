const app = require('./app');
const config = require('config');
console.log(config.app.port);
module.exports = app.listen(3001);
