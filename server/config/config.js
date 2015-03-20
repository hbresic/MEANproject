var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development: {
    db: 'mongodb://localhost/MEANproject',
    rootPath: rootPath,
    port: process.env.PORT || 3030
  },
  production: {
    db: 'mongodb://hbresic:meanproject@ds031711.mongolab.com:31711/meanproject',
    rootPath: rootPath,
    port: process.env.PORT || 80
  }
};
