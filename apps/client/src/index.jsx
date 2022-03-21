import React from 'react'
import { render } from 'react-dom'

import { App } from './App'

document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('root')

  if (el) {
    render(<App />, el)
  }
})
