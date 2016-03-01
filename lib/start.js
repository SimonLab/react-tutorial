'use strict'
require('env2')('.env')
const Server = require('./server');
const Hoek = require('hoek');

Server.init(process.env.PORT || 8000, function (err, server) {

  Hoek.assert(!err, err);
  console.log('The server is running on: ', server.info.uri);
});
