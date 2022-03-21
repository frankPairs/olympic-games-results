import styled from 'styled-components'

const H1 = styled.h1`
  font-size: ${(props) => props.theme.fontSize.xxl};
  font-weight: bold;
  color: ${(props) => props.theme.colors.gray4};
`

const H2 = styled.h2`
  font-size: ${(props) => props.theme.fontSize.xl};
  font-weight: bold;
  color: ${(props) => props.theme.colors.gray4};
`

const H3 = styled.h3`
  font-size: ${(props) => props.theme.fontSize.md};
  color: ${(props) => props.theme.colors.gray4};
`

const H4 = styled.h4`
  font-size: ${(props) => props.theme.fontSize.xs};
  color: ${(props) => props.theme.colors.gray4};
`

export { H3, H2, H1, H4 }
