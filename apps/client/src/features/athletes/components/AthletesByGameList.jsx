import React from 'react'

import { useAthletesByGameQuery } from '../hooks/useAthletesByGameQuery'
import { Error, Progress } from '../../../components/feedback'
import { GameResultsItem } from './GameResultsItem'
import { LoadMoreButton, LoadMoreWrapper } from './AthletesByGameList.styles'

const AthletesByGameList = () => {
  const { loading, error, games, fetchMore, hasMore } = useAthletesByGameQuery()

  if (loading && games.length === 0) {
    return (
      <div>
        <Progress />
      </div>
    )
  }

  if (error) {
    return <Error err={error} />
  }

  return (
    <ul>
      {games.map(game => <GameResultsItem key={game.id} game={game}/>)}

      {
        hasMore && <LoadMoreWrapper>
          <LoadMoreButton arial-label="Load more games" type="button" onClick={fetchMore}>
            {loading ? <Progress /> : 'More'}
          </LoadMoreButton>
        </LoadMoreWrapper>
      }

    </ul>
  )
}

export { AthletesByGameList }
