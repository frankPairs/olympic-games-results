import React from 'react'

import { H1, H2, H3, H4 } from './Typography.styles'

const Typography = ({ children, tag, className }) => {
  const props = { className }

  switch (tag) {
    case 'h1':
      return <H1 {...props}>{children}</H1>
    case 'h2':
      return <H2 {...props}>{children}</H2>
    case 'h3':
      return <H3 {...props}>{children}</H3>
    case 'h4':
      return <H4 {...props}>{children}</H4>
    default:
      return <h1 {...props}>{children}</h1>
  }
}

export { Typography }
