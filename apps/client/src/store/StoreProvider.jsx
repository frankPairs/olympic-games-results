import React from 'react'
import memCache from 'graphql-hooks-memcache'
import { GraphQLClient, ClientContext } from 'graphql-hooks'

const client = new GraphQLClient({
  url: 'http://localhost:3000/graphql',
  cache: memCache()
})

const StoreProvider = ({ children }) => (
  <ClientContext.Provider value={client}>
    {children}
  </ClientContext.Provider>
)

export { StoreProvider }
