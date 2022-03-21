import React from 'react'
import { cleanup, render } from '@testing-library/react'
import { MockProvider } from '../../../__mocks__/providers'
import { MedalResult } from './MedalResult'

function getWrapper (overrideProps) {
  return render(<MockProvider><MedalResult kind="gold" amount={10} {...overrideProps}/></MockProvider>)
}

describe('<MedalResult />', () => {
  beforeEach(cleanup)

  it('should show a gold medal image', () => {
    const { getByText, getByAltText } = getWrapper({ kind: 'gold', amount: 4 })

    getByAltText('Number of gold medals')
    getByText('4')
  })

  it('should show a silver medal image', () => {
    const { getByText, getByAltText } = getWrapper({ kind: 'silver', amount: 15 })

    getByAltText('Number of silver medals')
    getByText('15')
  })

  it('should show a bronze medal image', () => {
    const { getByText, getByAltText } = getWrapper({ kind: 'bronze', amount: 3 })

    getByAltText('Number of bronze medals')
    getByText('3')
  })
})
