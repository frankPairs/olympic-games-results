import styled from 'styled-components'

const Wrapper = styled.div`
  display: grid;
  background-size: cover;
  grid-template-rows: 80px auto;
  grid-template-columns: 100%;
  grid-template-areas:
    'header'
    'main';
  min-height: 100vh;

  @media only screen and (max-width: ${(props) => props.theme.media.mobile}) {
    grid-template-rows: 60px auto;
    padding: 0;
  }
`

const Header = styled.header`
  align-items: center;
  display: flex;
  grid-area: header;
  justify-content: flex-start;
  width: auto;
  padding: 0 ${(props) => props.theme.spacing.md};
  border-bottom: 1px solid ${(props) => props.theme.colors.gray1} ;
  
  .logo {
    height: 50px;
    width: auto;
  }

  @media only screen and (max-width: ${(props) => props.theme.media.mobile}) {
    .logo {
      height: 35px;
    }
  }
`

const Main = styled.main`
  grid-area: main;
  width: 1024px;
  margin: 0 auto;
  padding: ${(props) => props.theme.spacing.md} 0;
  box-sizing: border-box;

  @media only screen and (max-width: ${(props) => props.theme.media.smallDesktop}) {
    padding: ${(props) => props.theme.spacing.md};
    width: 100%;
  }
  
  @media only screen and (max-width: ${(props) => props.theme.media.mobile}) {
    padding: ${(props) => props.theme.spacing.xs};
  }
`

export { Wrapper, Header, Main }
