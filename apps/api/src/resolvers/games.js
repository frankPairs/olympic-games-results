import { handleResolverError } from '../utils/errors.js'
import { gameSerializer, athleteResultSerializer } from '../serializers/index.js'

const gameQueries = {

  /**
   * Returns all games paginated an ordered by year descending.
   *
   * @param _
   * @param params {{ pagination: { perPage: number, page: number } }}
   * @param app
   * @returns {Promise<{data: unknown[], totalCount: number}>}
   */
  async getAllGames (_, { limit, offset }, { app }) {
    try {
      const { repos } = app
      const gamesData = await repos.games.findAll({ limit, offset })
      const totalGames = await repos.games.countAll()

      return {
        data: gamesData.map(gameSerializer),
        totalCount: totalGames
      }
    } catch (err) {
      handleResolverError(err)
    }
  }
}

const gameType = {
  athleteResults: async ({ id }, _, { app }) => {
    try {
      const { repos } = app
      const athleteResultsData = await repos.athleteResults.findAllByGame(id)

      return athleteResultsData.map(athleteResultSerializer)
    } catch (err) {
      handleResolverError(err)
    }
  }
}

export { gameQueries, gameType }
