import React from 'react'

import { Wrapper } from './Progress.styles'

const Progress = () => (
  <Wrapper data-testid="loading" height="40" width="40">
    <title>Loading</title>
    <circle cx="20" cy="20" r="20" />
  </Wrapper>
)

export { Progress }
