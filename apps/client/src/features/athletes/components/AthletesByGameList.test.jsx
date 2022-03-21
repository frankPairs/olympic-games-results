import React from 'react'
import { cleanup, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { MockProvider } from '../../../__mocks__/providers'
import { useAthletesByGameQuery } from '../hooks/useAthletesByGameQuery'
import { mockGames } from '../__mocks__/games'
import { AthletesByGameList } from './AthletesByGameList'

jest.mock('../hooks/useAthletesByGameQuery')

const defaultQueryResponse = {
  loading: false,
  error: null,
  games: [],
  fetchMore: jest.fn(),
  hasMore: false
}

function getWrapper () {
  return render(<MockProvider><AthletesByGameList /></MockProvider>)
}

describe('<AthletesByGameList />', () => {
  beforeEach(cleanup)

  it('should show progress icon when request is running', () => {
    useAthletesByGameQuery.mockReturnValue({
      ...defaultQueryResponse,
      loading: true
    })

    const { getByTestId } = getWrapper()

    getByTestId('loading')
  })

  it('should show error message when request returns an error', () => {
    useAthletesByGameQuery.mockReturnValue({
      ...defaultQueryResponse,
      error: 'error'
    })

    const { getByText } = getWrapper()

    getByText('Ups, something wrong happened. Please try later.')
  })

  it('should show games list when request returns a successful response', () => {
    useAthletesByGameQuery.mockReturnValue({
      ...defaultQueryResponse,
      games: mockGames
    })

    const { getByText } = getWrapper()

    getByText('Tokyo - 2020')
    getByText('Pyeongchang - 2018')
  })

  it('should show "Has More" button when there are more games to request', () => {
    useAthletesByGameQuery.mockReturnValue({
      ...defaultQueryResponse,
      games: mockGames,
      hasMore: true
    })

    const { getByText } = getWrapper()

    getByText('More')
  })

  it('should request for more athlete after clicking "Has More" button', () => {
    const mockFetchMore = jest.fn()

    useAthletesByGameQuery.mockReturnValue({
      ...defaultQueryResponse,
      games: mockGames,
      hasMore: true,
      fetchMore: mockFetchMore
    })

    const { getByText } = getWrapper()
    const hasMoreButton = getByText('More')

    userEvent.click(hasMoreButton)

    expect(mockFetchMore).toHaveBeenCalledTimes(1)
  })
})
