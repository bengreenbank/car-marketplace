import React from 'react'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, Hits } from 'react-instantsearch-hooks-web'
import Card from './Card'

const searchClient = algoliasearch(
  process.env.REACT_APP_ALGOLIA_APPLICATION_ID,
  process.env.REACT_APP_ALGOLIA_SEARCH_API_KEY
)

const Hit = ({ hit }) => <Card item={hit} />

const Search = () => (
  <InstantSearch
    indexName={process.env.REACT_APP_ALGOLIA_INDEX_NAME}
    searchClient={searchClient}
  >
    <div className="container mt-8">
      <Hits
        hitComponent={Hit}
        classNames={{ list: 'grid lg:grid-cols-4 gap-6' }}
      />
    </div>
  </InstantSearch>
)

export default Search
