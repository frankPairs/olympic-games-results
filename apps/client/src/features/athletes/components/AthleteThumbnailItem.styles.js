
import styled from 'styled-components'

const Wrapper = styled.li`
  padding-bottom: ${(props) => props.theme.spacing.sm};
`

const PhotoImage = styled.img`
  object-fit: cover;
  width: 300px;
  height: 300px;

  @media only screen and (max-width: ${(props) => props.theme.media.mobile}) {
    width: 200px;
    height: 200px;
  }
`

const FullNameText = styled.p`
  margin-top: ${(props) => props.theme.spacing.sm};
  font-size: ${(props) => props.theme.fontSize.sm};
  color: ${(props) => props.theme.colors.gray3};
  font-weight: bold;
  text-align: center;
`

export { FullNameText, Wrapper, PhotoImage }
