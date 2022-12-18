import t from 'tap'

import { InternalDbError } from '../errors.js'
import { AthleteNotFoundError, AthletesRepository } from './athletes.js'

const mockAthlete = [
  {
    athlete_id: '1',
    name: 'test name',
    surname: 'test surname',
    bio: 'bio',
    date_of_birth: '2022-03-01',
    weight: 123,
    height: 23,
    photo_id: '1'
  }
]

t.test('athlete repository', t => {
  t.test('findOneById ', t => {
    t.test('returns an athlete photo from the database', async t => {
      const db = { get: () => Promise.resolve(mockAthlete[0]) }
      const repo = new AthletesRepository(db)

      t.resolveMatch(
        repo.findOneById('1'),
        mockAthlete[0]
      )

      t.end()
    })

    t.test('throws an internal database error', (t) => {
      const db = { get: () => Promise.reject(new Error('Db error')) }
      const repo = new AthletesRepository(db)

      t.rejects(repo.findOneById('1'), new InternalDbError('Internal database error'))
      t.end()
    })

    t.test('throws a not found error when athlete does not exists', (t) => {
      const db = { get: () => Promise.resolve(null) }
      const repo = new AthletesRepository(db)

      t.rejects(
        repo.findOneById('1'),
        new AthleteNotFoundError('Athlete with id 1 not found.')
      )
      t.end()
    })

    t.end()
  })

  t.end()
})
