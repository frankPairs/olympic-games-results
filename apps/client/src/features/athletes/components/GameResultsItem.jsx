import React from 'react'

import { AthleteThumbnailItem } from './AthleteThumbnailItem'
import { Title, Wrapper, ResultsList, NotFoundText, AthleteResultLink } from './GameResultsItem.styles'

const GameResultsItem = ({ game }) => {
  return (
    <Wrapper>
      <Title>{game.city} - {game.year}</Title>

      <ResultsList>
        {
          game.athleteResults.length === 0
            ? <NotFoundText>Any athlete found for this Olympic Game</NotFoundText>
            : game.athleteResults.map(({ athlete }) =>
              <AthleteResultLink key={athlete.id} to={`/athletes/${athlete.id}`}>
                <AthleteThumbnailItem athlete={athlete}/>
              </AthleteResultLink>

            )
        }
      </ResultsList>
    </Wrapper>
  )
}

export { GameResultsItem }
