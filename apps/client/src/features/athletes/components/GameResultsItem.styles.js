import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.li`
  margin-bottom: ${(props) => props.theme.spacing.md};
  overflow: hidden;
`

const Title = styled.h4`
  font-size: ${(props) => props.theme.fontSize.md};
  color: ${(props) => props.theme.colors.gray4};
  margin-bottom: ${(props) => props.theme.spacing.xs};
`

const NotFoundText = styled.p`
  font-size: ${(props) => props.theme.fontSize.sm};
  color: ${(props) => props.theme.colors.gray3};
  font-weight: bold;
`

const ResultsList = styled.ul`
  display: flex;
  flex-direction: row;
  overflow-y: hidden;
  overflow-x: auto;
  scroll-behavior: smooth;
  
  /* Works on Firefox */
  scrollbar-width: thin;
  scrollbar-color: transparent ${(props) => props.theme.colors.primary};
  
  /* Works on Chrome, Edge, and Safari */
  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.primary};
  }
  
  > a {
    margin-right: ${(props) => props.theme.spacing.sm};
  }
  
  > a:last-child {
    margin-right: 0;
  };
`

const AthleteResultLink = styled(Link)`
  text-decoration: none;
`

export { Title, Wrapper, ResultsList, NotFoundText, AthleteResultLink }
