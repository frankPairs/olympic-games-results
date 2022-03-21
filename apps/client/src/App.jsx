import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { Layout } from './components/layout'
import { RedirectToHome } from './components/navigation'
import { theme } from './styles'
import { StoreProvider } from './store'

const AthletesRouter = lazy(() => import('./features/athletes/Router'))

const App = () => (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
          <StoreProvider>
              <Suspense fallback={null}>
                <Routes>
                  <Route path="/*" element={<Layout />}>
                    <Route path="athletes/*" element={<AthletesRouter />} />

                    <Route path="*" element={<RedirectToHome homePath="/athletes" />} />
                  </Route>
                </Routes>
              </Suspense>
          </StoreProvider>
      </ThemeProvider>
    </BrowserRouter>
)

export { App }
