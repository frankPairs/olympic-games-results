import React from 'react'

import { getFirstErrorMessage } from '../../utils/errors'
import { Typography } from './Typography'
import { Wrapper } from './Error.styles'

const Error = ({ err }) => {
  const errorMessage = getFirstErrorMessage(err)

  return (
    <Wrapper>
      <Typography tag="h4">{errorMessage}</Typography>
    </Wrapper>
  )
}

export { Error }
