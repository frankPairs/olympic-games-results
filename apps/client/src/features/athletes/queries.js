const GET_ATHLETE_RESULTS_BY_GAME_QUERY = `
    query GetAllGames($limit: Int!, $offset: Int!) {
        games: getAllGames(limit: $limit, offset: $offset) {
            data {
                id
                city
                year
                athleteResults {
                    athlete {
                        id
                        name
                        surname
                        photo {
                            base64
                        }
                    }
                    globalScore
                }
            }
            totalCount
        }
    }
`

const GET_ATHLETE_DETAIL = `
    query GetOneAthlete($id: ID!) {
          athlete: getOneAthlete(id: $id) {
            id
            name
            surname
            dateOfBirth
            bio
            weight
            height
            results {
              game {
                id
                city
                year
              }
              gold
              silver
              bronze
            }
            photo {
              base64
            }
          }
    }
`

export { GET_ATHLETE_RESULTS_BY_GAME_QUERY, GET_ATHLETE_DETAIL }
