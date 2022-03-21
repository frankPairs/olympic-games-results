import React, { createContext, useState } from 'react'

const AthletesByGameContext = createContext(null)

const AthleteByGameProvider = ({ children }) => {
  const [offset, setOffset] = useState(0)

  return <AthletesByGameContext.Provider value={{
    offset,
    setOffset
  }}>{children}</AthletesByGameContext.Provider>
}

export { AthletesByGameContext, AthleteByGameProvider }
