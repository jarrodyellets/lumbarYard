'use strict';

const Hapi = require('hapi');
const Path = require('path');

const server = new Hapi.Server({
  port: process.env.PORT || 8000,
  routes: {
    files: {
      relativeTo: Path.join(__dirname, 'dist')
    }
  }
})

const init = async () => {

  await server.register(require('inert'));

  server.route({
    method: 'GET',
    path: '/{path*}',
    handler: {
      directory: {
        path: 'dist'
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