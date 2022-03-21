import React from 'react'
import { Link, Outlet } from 'react-router-dom'

import { GlobalStyles } from '../../styles'
import { Header, Main, Wrapper } from './Layout.styles'
import logoImageUrl from '../../assets/logo.png'

const Layout = () => (
  <Wrapper>
    <GlobalStyles />
    <Header>
      <div>
        <Link to="/" >
          <img className="logo" src={logoImageUrl} alt="Olympic Games logo"/>
        </Link>
      </div>
    </Header>
    <Main>
      <Outlet />
    </Main>
  </Wrapper>
)

export { Layout }
