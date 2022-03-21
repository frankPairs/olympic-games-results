import t from 'tap'

import { build } from '../../src/app.js'

t.test('athlete resolvers queries', (t) => {
  t.beforeEach(async () => {
    t.context.app = build()
  })

  t.teardown(async () => {
    await t.context.app.close()
  })

  t.test('getOneAthlete', (t) => {
    t.test('get basic athlete information', async (t) => {
      const athleteId = '1'
      const res = await t.context.app.inject({
        method: 'POST',
        url: '/graphql',
        body: {
          query: `query GetOneAthlete($id: ID!) {
            athlete: getOneAthlete(id: $id) {
              id
              name
              surname
              bio
              dateOfBirth
              weight
              height
            }
          }`,
          variables: { id: athleteId }
        }
      })

      const { repos } = t.context.app
      const { data: { athlete } } = JSON.parse(res.body)
      const athleteDb = await repos.athletes.findOneById(athleteId)

      t.equal(res.statusCode, 200, 'returns 200 http status code')
      t.equal(athlete.id, String(athleteDb.athlete_id), 'returns athlete id')
      t.equal(athlete.name, athleteDb.name, 'returns athlete name')
      t.equal(athlete.surname, athleteDb.surname, 'returns athlete surname')
      t.equal(athlete.bio, athleteDb.bio, 'returns athlete bio')
      t.equal(athlete.dateOfBirth, athleteDb.date_of_birth, 'returns athlete dateOfBirth')
      t.equal(athlete.weight, athleteDb.weight, 'returns athlete weight')
      t.equal(athlete.height, athleteDb.height, 'returns athlete height')
    })

    t.test('get athlete photo', async (t) => {
      const athleteId = '1'
      const res = await t.context.app.inject({
        method: 'POST',
        url: '/graphql',
        body: {
          query: `query GetOneAthlete($id: ID!) {
            athlete: getOneAthlete(id: $id) {
              photo {
                id
                base64
              }
            }
          }`,
          variables: { id: athleteId }
        }
      })

      const { repos } = t.context.app
      const { data: { athlete } } = JSON.parse(res.body)
      const athletePhotoDb = await repos.athletePhotos.findOneByAthlete(athleteId)

      t.equal(res.statusCode, 200)
      t.equal(athlete.photo.id, String(athletePhotoDb.photo_id), 'returns athlete photo id')
    })

    t.test('get athlete results', async (t) => {
      const athleteId = '1'
      const res = await t.context.app.inject({
        method: 'POST',
        url: '/graphql',
        body: {
          query: `query GetOneAthlete($id: ID!) {
            athlete: getOneAthlete(id: $id) {
              results {
                gold
                silver
                bronze
                globalScore
              }
            }
          }`,
          variables: { id: athleteId }
        }
      })

      const { repos } = t.context.app
      const { data: { athlete } } = JSON.parse(res.body)
      const athleteResultsDb = await repos.athleteResults.findAllByAthlete(athleteId)

      t.equal(res.statusCode, 200)
      t.equal(athlete.results[0].gold, athleteResultsDb[0].gold, 'returns athlete gold results')
      t.equal(
        athlete.results[0].silver,
        athleteResultsDb[0].silver,
        'returns athlete silver results'
      )
      t.equal(
        athlete.results[0].bronze,
        athleteResultsDb[0].bronze,
        'returns athlete bronze results'
      )
    })

    t.test('throw a not found error', async (t) => {
      const athleteId = '-1'
      const res = await t.context.app.inject({
        method: 'POST',
        url: '/graphql',
        body: {
          query: `query GetOneAthlete($id: ID!) {
            athlete: getOneAthlete(id: $id) {
              results {
                gold
                silver
                bronze
                globalScore
              }
            }
          }`,
          variables: { id: athleteId }
        }
      })

      const { errors } = JSON.parse(res.body)

      t.equal(res.statusCode, 500)
      t.equal(errors[0].message, 'Athlete with id -1 not found.')
    })

    t.end()
  })

  t.end()
})
