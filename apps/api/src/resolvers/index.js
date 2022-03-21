import { gameQueries, gameType } from './games.js'
import { athleteQueries, athleteType } from './athlete.js'
import { athleteResultType } from './athleteResults.js'

const resolvers = {
  Query: {
    ...gameQueries,
    ...athleteQueries
  },
  Game: gameType,
  AthleteResult: athleteResultType,
  Athlete: athleteType
}

export default resolvers
