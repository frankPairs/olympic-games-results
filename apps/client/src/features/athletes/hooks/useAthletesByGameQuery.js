import { useContext } from 'react'
import { useQuery } from 'graphql-hooks'
import { sort, prop, descend } from 'ramda'

import { AthletesByGameContext } from '../contexts/AthletesByGameContext'
import { GET_ATHLETE_RESULTS_BY_GAME_QUERY } from '../queries'

const initialQueryData = { games: { data: [], totalCount: 0 } }

const orderAthleteResultsByGlobalScore = sort(descend(prop('globalScore')))

/**
 * Add new games to the current ones after paginating
 *
 * @param prevQueryData {object}
 * @param nextQueryData {object}
 * @returns {object}
 */
function updateData (prevQueryData, nextQueryData) {
  return {
    games: {
      ...nextQueryData.games,
      data: [...prevQueryData.games.data, ...nextQueryData.games.data]
    }
  }
}

/**
 * Queries all games and gets their athletes. Athletes are ordered by their globalScore property in a descending order.
 *
 * @returns {{games: (object[]), loading: boolean, error: Error, hasMore: boolean, fetchMore(): void}}}
 */
function useAthletesByGameQuery () {
  const { offset, setOffset } = useContext(AthletesByGameContext)
  const { loading, error, data: { games } = initialQueryData } = useQuery(GET_ATHLETE_RESULTS_BY_GAME_QUERY, {
    variables: {
      offset,
      limit: 5
    },
    updateData
  })

  return {
    loading,
    error,
    games: games.data.map(game => ({
      ...game,
      athleteResults: orderAthleteResultsByGlobalScore(game.athleteResults)
    })),
    fetchMore () {
      setOffset(games.data.length)
    },
    hasMore: games.data.length < games.totalCount
  }
}

export { useAthletesByGameQuery }
