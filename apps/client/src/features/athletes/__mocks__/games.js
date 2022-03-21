const mockGames = [
  {
    id: '1',
    city: 'Tokyo',
    year: 2020,
    athleteResults: []
  },
  {
    id: '4',
    city: 'Pyeongchang',
    year: 2018,
    athleteResults: [
      {
        athlete: {
          id: '1',
          name: 'Arianna',
          surname: 'Fontana',
          photo: {
            base64: 'test'
          }
        },
        globalScore: 9
      }
    ]
  }
]

export { mockGames }
