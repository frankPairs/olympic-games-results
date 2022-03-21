import mercurius from 'mercurius'

const { ErrorWithProps } = mercurius

function handleResolverError (err) {
  throw new ErrorWithProps(err.message, {
    code: err.name
  })
}

export { handleResolverError }
