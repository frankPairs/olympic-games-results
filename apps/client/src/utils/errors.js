const errorCodes = {
  athleteNotFound: 'ATHLETE_NOT_FOUND',
  internalServerError: 'INTERNAL_DATABASE_ERROR'
}

function getFirstErrorMessage (error) {
  try {
    const { httpError } = error
    const parsedErrors = JSON.parse(httpError.body)
    const codes = parsedErrors.errors.map(err => err.extensions.code)

    if (codes.length === 0) {
      return null
    }

    switch (codes[0]) {
      case errorCodes.athleteNotFound:
        return 'Athlete not found.'
      default:
        return 'Ups, something wrong happened. Please try later.'
    }
  } catch (err) {
    return 'Ups, something wrong happened. Please try later.'
  }
}

export { errorCodes, getFirstErrorMessage }
