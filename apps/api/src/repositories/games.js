import { InternalDbError } from '../errors.js'

class GameNotFoundError extends Error {
  constructor (message) {
    super(message)
    this.name = 'GAME_NOT_FOUND'
  }
}

function gamesRepository (db) {
  return {
    /**
     * Return all games paginated and ordered by year.
     *
     * @throws {InternalDbError} Internal database error
     * @param pagination {{ limit: number, offset: number }}: Pagination object with a limit and an offset
     * @returns {Promise<{ game_id: string, city: string, year: number }[]>}
     */
    async findAll (pagination) {
      try {
        return await db.all(`
          SELECT * FROM Game
          ORDER BY year DESC
          LIMIT $limit OFFSET $offset
        `, { $limit: pagination.limit, $offset: pagination.offset })
      } catch (err) {
        throw new InternalDbError('Internal database error', err.stack)
      }
    },
    /**
     * Search a game by id. If it exists, it returns a db row object.
     *
     * @throws {GameNotFoundError} Game not found
     * @throws {InternalDbError} Internal database error
     * @param gameId {string}: Game id
     * @returns {Promise<{game_id: string, city: string, year: number}>}
     */
    async findOneById (gameId) {
      let game

      try {
        game = await db.get(`
          SELECT * FROM Game
          WHERE Game.game_id = $gameId;
      `, { $gameId: gameId })
      } catch (err) {
        throw new InternalDbError('Internal database error', err.stack)
      }

      if (!game) {
        throw new GameNotFoundError(`Game with id ${gameId} not found.`)
      }

      return game
    },
    /**
     * Return the number of Olympic Games in the database
     *
     * @returns {Promise<number>}
     */
    async countAll () {
      try {
        const { totalGames } = await db.get('SELECT COUNT(*) as totalGames FROM Game')

        return totalGames
      } catch (err) {
        throw new InternalDbError('Internal database error', err.stack)
      }
    }
  }
}

export { gamesRepository, GameNotFoundError }
