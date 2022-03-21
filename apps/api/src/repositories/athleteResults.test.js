import t from 'tap'

import { InternalDbError } from '../errors.js'
import { athleteResultsRepository } from './athleteResults.js'

const mockAthleteResults = [
  { athlete_id: '1', game_id: '1', gold: 1, silver: 2, bronze: 3 },
  { athlete_id: '2', game_id: '3', gold: 1, silver: 5, bronze: 0 },
  { athlete_id: '3', game_id: '2', gold: 0, silver: 15, bronze: 0 }
]

t.test('athleteResults repository', t => {
  t.test('findAllByGame ', t => {
    t.test('returns all athlete results by game', t => {
      const db = { all: () => Promise.resolve([mockAthleteResults[0]]) }
      const repo = athleteResultsRepository(db)

      t.resolveMatch(
        repo.findAllByGame('1'),
        [mockAthleteResults[0]]
      )

      t.end()
    })

    t.test('throws an internal database error', (t) => {
      const db = { all: () => Promise.reject(new Error('Db error')) }
      const repo = athleteResultsRepository(db)

      t.rejects(repo.findAllByGame('1'), new InternalDbError('Internal database error'))
      t.end()
    })

    t.end()
  })

  t.test('findAllByAthlete ', t => {
    t.test('returns all athlete results', t => {
      const db = { all: () => Promise.resolve([mockAthleteResults[1]]) }
      const repo = athleteResultsRepository(db)

      t.resolveMatch(
        repo.findAllByAthlete('2'),
        [mockAthleteResults[1]]
      )

      t.end()
    })

    t.test('throws an internal database error', (t) => {
      const db = { all: () => Promise.reject(new Error('Db error')) }
      const repo = athleteResultsRepository(db)

      t.rejects(repo.findAllByAthlete('2'), new InternalDbError('Internal database error'))
      t.end()
    })

    t.end()
  })

  t.end()
})
