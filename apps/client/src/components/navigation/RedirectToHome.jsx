import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const RedirectToHome = ({ homePath }) => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate(homePath)
  }, [])

  return null
}

export { RedirectToHome }
