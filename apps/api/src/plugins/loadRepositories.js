import fp from 'fastify-plugin'
import sqlite3 from 'sqlite3'
import path from 'path'

import {
  gamesRepository,
  athletesRepository,
  athleteResultsRepository,
  athletePhotosRepository
} from '../repositories/index.js'
import { sqlitePromisify } from '../utils/sqlitePromisify.js'

/**
 * It connects to the sqlite database and decorates the Fastify object with a repos object.
 *
 * Repositories act as a layer to interact with the database so resolvers don't need to know anything about how the
 * queries to the database are made.
 */
const loadRepositories = fp((fastify, opts, done) => {
  const dbPath = path.join(process.cwd(), 'db', 'olympic-games.db')
  const dbMode = sqlite3.OPEN_READWRITE
  const sqlite3Verbose = sqlite3.verbose()
  const db = new sqlite3Verbose.Database(dbPath, dbMode)
  const dbPromisify = sqlitePromisify(db)
  const repos = {
    games: gamesRepository(dbPromisify),
    athletes: athletesRepository(dbPromisify),
    athleteResults: athleteResultsRepository(dbPromisify),
    athletePhotos: athletePhotosRepository(dbPromisify)
  }

  fastify.decorate('repos', repos)

  fastify.log.info('Database connected!')

  done()
})

export { loadRepositories }
