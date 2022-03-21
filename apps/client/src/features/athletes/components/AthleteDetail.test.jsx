import React from 'react'
import { render, cleanup } from '@testing-library/react'

import { MockProvider } from '../../../__mocks__/providers'
import { mockAthletes } from '../__mocks__/athletes'
import { AthleteDetail } from './AthleteDetail'

function getWrapper (overrideProps) {
  return render(<MockProvider><AthleteDetail athlete={mockAthletes[0]} {...overrideProps}/></MockProvider>)
}

describe('<AthleteDetail />', () => {
  beforeEach(cleanup)

  it('should show athlete full name', () => {
    const { getByText } = getWrapper()

    getByText('Rafa Nadal')
  })

  it('should show athlete date of birth', () => {
    const { getByText } = getWrapper()

    getByText('09/06/1980')
  })

  it('should show athlete weight and its units', () => {
    const { getByText } = getWrapper()

    getByText('80 kg')
  })

  it('should show athlete height and its units', () => {
    const { getByText } = getWrapper()

    getByText('180 cm')
  })

  it('should show athlete bio', () => {
    const { getByText } = getWrapper()

    getByText('Bio test!!')
  })

  it('should show athlete number of gold medals', () => {
    const { getByText } = getWrapper()

    getByText('1')
  })

  it('should show athlete number of silver medals', () => {
    const { getByText } = getWrapper()

    getByText('2')
  })

  it('should show athlete number of bronze medals', () => {
    const { getByText } = getWrapper()

    getByText('5')
  })
})
