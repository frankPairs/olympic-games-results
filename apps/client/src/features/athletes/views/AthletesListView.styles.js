import styled from 'styled-components'

import { Typography } from '../../../components/feedback'

const Wrapper = styled.div`
  box-sizing: border-box;
  min-height: 100%;
`

const Title = styled(Typography)`
  margin-bottom: ${(props) => props.theme.spacing.sm};
`

const GameResultsListWrapper = styled.div`
  position: relative;
  
`

export { Wrapper, GameResultsListWrapper, Title }
