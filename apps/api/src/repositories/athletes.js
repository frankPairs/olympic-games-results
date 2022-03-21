import { InternalDbError } from '../errors.js'

class AthleteNotFoundError extends Error {
  constructor (message) {
    super(message)
    this.name = 'ATHLETE_NOT_FOUND'
  }
}

function athletesRepository (db) {
  return {
    /**
     * Search an athlete by id. If it exists, it returns a db row object.
     *
     * @throws {AthleteNotFoundError} Athlete not found
     * @throws {InternalDbError} Internal database error
     * @param athleteId {string}: Athlete id
     * @returns {Promise<{athlete_id: string, name: string, surname: string, bio: string, date_of_birth: string, weight: number, height: number, photo_id: string}>}
     */
    async findOneById (athleteId) {
      let athlete

      try {
        athlete = await db.get(`
          SELECT * FROM Athlete
          WHERE Athlete.athlete_id = $athleteId;
      `, { $athleteId: athleteId })
      } catch (err) {
        throw new InternalDbError('Internal database error', err.stack)
      }

      if (!athlete) {
        throw new AthleteNotFoundError(`Athlete with id ${athleteId} not found.`)
      }

      return athlete
    }
  }
}

export { athletesRepository, AthleteNotFoundError }
