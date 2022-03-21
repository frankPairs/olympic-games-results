import Fastify from 'fastify'
import mercurius from 'mercurius'
import fastifyCors from 'fastify-cors'

import { loadRepositories } from './plugins/index.js'
import schema from './schema.js'
import resolvers from './resolvers/index.js'

function build (opts = {}) {
  const app = Fastify(opts)

  app.register(fastifyCors)

  app.register(loadRepositories)

  app.register(mercurius, {
    schema,
    resolvers,
    graphiql: true
  })

  return app
}

export { build }
