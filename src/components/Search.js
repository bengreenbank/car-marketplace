import React from 'react'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, Hits } from 'react-instantsearch-hooks-web'

const searchClient = algoliasearch(
  process.env.REACT_APP_ALGOLIA_APPLICATION_ID,
  process.env.REACT_APP_ALGOLIA_SEARCH_API_KEY
)

const Hit = ({ hit }) => JSON.stringify(hit)

const Search = () => (
  <InstantSearch
    indexName={process.env.REACT_APP_ALGOLIA_INDEX_NAME}
    searchClient={searchClient}
  >
    <Hits hitComponent={Hit} />
  </InstantSearch>
)

export default Search
