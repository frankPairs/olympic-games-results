import { useQuery } from 'graphql-hooks'

import { GET_ATHLETE_DETAIL } from '../queries'

const initialQueryData = { athlete: null }

/**
 * Queries one athlete by its id
 *
 * @param athleteId {string}
 * @returns {{athlete: object, loading: boolean, error: Error}}
 */
function useAthleteQuery (athleteId) {
  const { loading, error, data: { athlete } = initialQueryData } = useQuery(GET_ATHLETE_DETAIL, {
    variables: {
      id: athleteId
    },
    useCache: true
  })

  return {
    loading,
    error,
    athlete
  }
}

export { useAthleteQuery }
