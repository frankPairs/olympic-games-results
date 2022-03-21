import { build } from './app.js'

const server = build({
  logger: {
    level: 'info',
    prettyPrint: true
  },
  cors: true
})

server.listen(3000, (err) => {
  if (err) {
    server.log.error(err)
    process.exit(1)
  }
})
