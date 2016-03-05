'use strict'

const Hapi = require('hapi');
const Home = require('./plugins/home/home');
const Vision = require('vision');
const Handlebars = require('handlebars');

exports.init = function(port, next) {

  const server = new Hapi.Server();
  server.connection({port: port});

  const plugins = [Vision, Home];
  server.register(plugins, function(err){

    server.views({
      engines: {
        html: Handlebars
      },
      relativeTo: __dirname + '/views/',
      path: '.',
      layout: 'default',
      layoutPath: 'layout',
      helpersPath: 'helpers',
      partialsPath: 'partials'
    });

    server.start(function(err) {

      return next(err, server);
    });
  });
}
