import { InternalDbError } from '../errors.js'

class AthleteResultsRepository {
  constructor (db) {
    this.db = db
  }

  /**
   * Return all athlete results of an Olympic Game
   *
   * @throws {InternalDbError} Internal database error
   * @param gameId {string}: Olympic Game id
   * @returns {Promise<{athlete_id: string, game_id: string, gold: number, silver: number, bronze: number}[]>}
   */
  async findAllByGame (gameId) {
    try {
      return await this.db.all(`
          SELECT * FROM AthleteResult
          LEFT JOIN Game G on G.game_id = AthleteResult.game_id
          WHERE G.game_id = $gameId;
      `, { $gameId: gameId })
    } catch (err) {
      throw new InternalDbError('Internal database error', err.stack)
    }
  }

  /**
   * Returns all athlete results from a specific athlete
   *
   * @throws {InternalDbError} Internal database error
   * @param athleteId {string}: Athlete id
   * @returns {Promise<{athlete_id: string, game_id: string, gold: number, silver: number, bronze: number}[]>}
   */
  async findAllByAthlete (athleteId) {
    try {
      return await this.db.all(`
        SELECT * FROM AthleteResult
        LEFT JOIN Athlete A on A.athlete_id = AthleteResult.athlete_id
        WHERE A.athlete_id = $athleteId;
    `, { $athleteId: athleteId })
    } catch (err) {
      throw new InternalDbError('Internal database error', err.stack)
    }
  }
}

export { AthleteResultsRepository }
