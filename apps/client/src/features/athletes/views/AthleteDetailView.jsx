import React from 'react'
import { useParams } from 'react-router-dom'

import { Progress, Error } from '../../../components/feedback'
import { AthleteDetail } from '../components/AthleteDetail'
import { useAthleteQuery } from '../hooks/useAthleteQuery'
import { getAthleteFullName } from '../utils'
import { Title } from './AthleteDetailView.styles'

const AthleteDetailView = () => {
  const { athleteId } = useParams()
  const { loading, error, athlete } = useAthleteQuery(athleteId)

  if (loading) {
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
    <div>
      <Title tag="h2">{getAthleteFullName(athlete)} details</Title>

      <AthleteDetail athlete={athlete}/>
    </div>
  )
}

export { AthleteDetailView }
