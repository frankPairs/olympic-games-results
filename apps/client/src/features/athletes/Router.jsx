import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { AthleteByGameProvider } from './contexts/AthletesByGameContext'
import { AthletesListview } from './views/AthletesListView'
import { AthleteDetailView } from './views/AthleteDetailView'

const AthletesRouter = () => {
  return (
    <AthleteByGameProvider>
      <Routes>
        <Route path="/" element={<AthletesListview />} />
        <Route path=":athleteId" element={<AthleteDetailView />} />
      </Routes>
    </AthleteByGameProvider>

  )
}

export default AthletesRouter
