import t from 'tap'

import { InternalDbError } from '../errors.js'
import { gamesRepository, GameNotFoundError } from './games.js'

const mockGames = [
  { game_id: '1', city: 'Barcelona', year: 1992 },
  { game_id: '2', city: 'Atlanta', year: 1996 },
  { game_id: '3', city: 'Rio de Janeiro', year: 2000 }
]

t.test('games repository', t => {
  t.test('findAll ', t => {
    t.test('returns all games', t => {
      const db = { all: () => Promise.resolve(mockGames) }
      const repo = gamesRepository(db)

      t.resolveMatch(
        repo.findAll({ limit: 10, offset: 0 }),
        mockGames
      )

      t.end()
    })

    t.test('throws an internal database error', (t) => {
      const db = { all: () => Promise.reject(new Error('Db error')) }
      const repo = gamesRepository(db)

      t.rejects(
        repo.findAll({ limit: 10, offset: 0 }),
        new InternalDbError('Internal database error')
      )
      t.end()
    })

    t.end()
  })

  t.test('findOneById ', t => {
    t.test('returns a game by id', t => {
      const db = { get: () => Promise.resolve(mockGames[0]) }
      const repo = gamesRepository(db)

      t.resolveMatch(
        repo.findOneById('1'),
        mockGames[0]
      )

      t.end()
    })

    t.test('throw an internal database error', t => {
      const db = { get: () => Promise.reject(new Error('Db error')) }
      const repo = gamesRepository(db)

      t.rejects(repo.findOneById('1'), new InternalDbError('Internal database error'))
      t.end()
    })

    t.test('throws a not found error when a game does not exists', (t) => {
      const db = { get: () => Promise.resolve(null) }
      const repo = gamesRepository(db)

      t.rejects(
        repo.findOneById('1'),
        new GameNotFoundError('Game with id 1 not found.')
      )

      t.end()
    })

    t.end()
  })

  t.test('countAll ', t => {
    t.test('returns the total number of games', t => {
      const db = { get: () => Promise.resolve({ totalGames: 3 }) }
      const repo = gamesRepository(db)

      t.resolveMatch(repo.countAll(), 3)

      t.end()
    })

    t.test('throw an internal database error', t => {
      const db = { get: () => Promise.reject(new Error('Db error')) }
      const repo = gamesRepository(db)

      t.rejects(repo.countAll(), new InternalDbError('Internal database error'))
      t.end()
    })

    t.end()
  })

  t.end()
})
