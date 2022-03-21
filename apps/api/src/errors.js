class InternalDbError extends Error {
  constructor (message, stack) {
    super(message)
    this.name = 'INTERNAL_DATABASE_ERROR'
    this.stack = stack
  }
}

export { InternalDbError }
