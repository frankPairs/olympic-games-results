import React from 'react'

import { AthletesByGameList } from '../components/AthletesByGameList'
import { Wrapper, GameResultsListWrapper, Title } from './AthletesListView.styles'

const AthletesListview = () => {
  return (
    <Wrapper>
      <Title tag={'h2'}>Athletes</Title>

       <GameResultsListWrapper>
        <AthletesByGameList />
       </GameResultsListWrapper>
    </Wrapper>
  )
}

export { AthletesListview }
