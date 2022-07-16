import React from 'react'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch } from 'react-instantsearch-hooks-web'

const searchClient = algoliasearch(
  process.env.ALGOLIA_APPLICATION_ID,
  process.env.ALGOLIA_SEARCH_API_KEY
)

export default () => (
  <InstantSearch
    indexName={process.env.ALGOLIA_INDEX_NAME}
    searchClient={searchClient}
  ></InstantSearch>
)
