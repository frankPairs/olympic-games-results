import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: ${(props) => props.theme.spacing.xxs};
  
  p {
    font-size: ${(props) => props.theme.fontSize.xs};
    color: ${(props) => props.theme.colors.gray4};
  }
  
  img {
    width: 28px;
    height: 28px;
    margin-bottom: ${(props) => props.theme.spacing.xxs};
  }
`

export { Wrapper }
