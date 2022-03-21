module.exports = {
  testEnvironment: 'jsdom',
  clearMocks: true,
  resetMocks: true,
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|svg)$': '<rootDir>/src/__mocks__/fileMock.js'
  },
  globals: {}
}
