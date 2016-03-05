'use strict'

const HomeHandler = require('./home_handler');
const Home = function(server, options, next) {
  server.route(
    [
      {
        method: 'GET',
        path: '/',
        config: {
          description: 'return the home page',
          handler: HomeHandler
        }
      }
    ]
  );

  return next();

}

exports.register = Home;
exports.register.attributes = {
  name: 'Home'
}
