import { handleResolverError } from '../utils/errors.js'
import { athleteSerializer, gameSerializer } from '../serializers/index.js'

const athleteResultType = {
  async athlete ({ athleteId }, args, { app }) {
    try {
      const { repos } = app
      const athleteData = await repos.athletes.findOneById(athleteId)

      return athleteSerializer(athleteData)
    } catch (err) {
      handleResolverError(err)
    }
  },
  async game ({ gameId }, args, { app }) {
    try {
      const { repos } = app
      const gameData = await repos.games.findOneById(gameId)

      return gameSerializer(gameData)
    } catch (err) {
      handleResolverError(err)
    }
  },
  globalScore ({ gold, silver, bronze }) {
    return (gold * 5) + (silver * 3) + bronze
  }
}

export { athleteResultType }
