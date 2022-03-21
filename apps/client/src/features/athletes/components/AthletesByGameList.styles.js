import styled from 'styled-components'

const LoadMoreWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
`

const LoadMoreButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: transparent;
  font-size: ${(props) => props.theme.fontSize.xs};
  border: 1px solid ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primary};
  padding: ${(props) => props.theme.spacing.sm};
  border-radius: 50%;
  width: 60px;
  height: 60px;
  
  @media only screen and (max-width: ${(props) => props.theme.media.mobile}) {
    padding: ${(props) => props.theme.spacing.xxs};
    width: 45px;
    height: 45px;
  }
`

export { LoadMoreButton, LoadMoreWrapper }
