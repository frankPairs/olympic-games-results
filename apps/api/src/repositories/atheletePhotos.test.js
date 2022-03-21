import t from 'tap'

import { InternalDbError } from '../errors.js'
import { AthletePhotoNotFoundError, athletePhotosRepository } from './athletePhotos.js'

const mockAthletePhotos = [
  { photo_id: '1', photo: Buffer.from('test'), mime_type: 'jpg' },
  { photo_id: '2', photo: Buffer.from('test'), mime_type: 'jpg' },
  { photo_id: '3', photo: Buffer.from('test'), mime_type: 'jpg' }
]

t.test('athletePhotos repository', t => {
  t.test('findOneByAthlete ', t => {
    t.test('returns an athlete photo from the database', async t => {
      const db = { get: () => Promise.resolve(mockAthletePhotos[0]) }
      const repo = athletePhotosRepository(db)

      t.resolveMatch(
        repo.findOneByAthlete('1'),
        mockAthletePhotos[0]
      )

      t.end()
    })

    t.test('throws an internal database error', (t) => {
      const db = { get: () => Promise.reject(new Error('Db error')) }
      const repo = athletePhotosRepository(db)

      t.rejects(repo.findOneByAthlete('1'), new InternalDbError('Internal database error'))
      t.end()
    })

    t.test('throws a not found error when athlete does not exists', (t) => {
      const db = { get: () => Promise.resolve(null) }
      const repo = athletePhotosRepository(db)

      t.rejects(
        repo.findOneByAthlete('1'),
        new AthletePhotoNotFoundError('Athlete with id 1 does not have photo.')
      )
      t.end()
    })

    t.end()
  })

  t.end()
})
