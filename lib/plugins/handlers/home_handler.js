'use strict'

const HomeHandler = function (request, reply) {

    return reply.view('home');
}

module.exports = HomeHandler;
