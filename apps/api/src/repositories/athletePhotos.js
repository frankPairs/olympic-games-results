import { InternalDbError } from '../errors.js'

class AthletePhotoNotFoundError extends Error {
  constructor (message) {
    super(message)
    this.name = 'ATHLETE_PHOTO_NOT_FOUND'
  }
}

class AthletePhotosRepository {
  constructor (db) {
    this.db = db
  }

  /**
   * Return the photo of an athlete if it exists.
   *
   * @throws {InternalDbError} Internal database error
   * @param athleteId {string}: Athlete id
   * @returns {Promise<{ photo_id: string, photo: Buffer, mime_type: string }>}
   */
  async findOneByAthlete (athleteId) {
    let photo

    try {
      photo = await this.db.get(`
          SELECT * FROM AthletePhoto
          LEFT JOIN Athlete A on A.photo_id = AthletePhoto.photo_id
          WHERE A.athlete_id = $athleteId;
      `, { $athleteId: athleteId })
    } catch (err) {
      throw new InternalDbError('Internal database error', err.stack)
    }

    if (!photo) {
      throw new AthletePhotoNotFoundError(`Athlete with id ${athleteId} does not have photo.`)
    }

    return photo
  }
}

export { AthletePhotosRepository, AthletePhotoNotFoundError }
