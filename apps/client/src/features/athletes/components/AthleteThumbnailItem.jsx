import React from 'react'

import { FullNameText, Wrapper, PhotoImage } from './AthleteThumbnailItem.styles'
import { getAthleteFullName } from '../utils'

const AthleteThumbnailItem = ({ athlete }) => {
  const fullName = getAthleteFullName(athlete)

  return (
    <Wrapper>
      <PhotoImage src={`data:image/png;base64,${athlete.photo.base64}`} alt={fullName} />
      <FullNameText>{fullName}</FullNameText>
    </Wrapper>
  )
}

export { AthleteThumbnailItem }
