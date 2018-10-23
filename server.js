'use strict';

const Hapi = require('hapi');
const Path = require('path');

const server = new Hapi.Server({
  port: process.env.PORT || 8000,
})

const init = async () => {

  await server.register(require('inert'));

  server.route({
    method: 'GET',
    path: '/{path*}',
    handler: {
      directory: {
        path: Path.join(__dirname, 'dist'),
        listing: false,
        index: true
      }
    }
  })

  try {
    await server.start();
    console.log('Server started');
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

init();