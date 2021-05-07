import React from 'react'
import './Searching.css'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

function Searching() {
  const items = [
    {
      id: 0,
      name: 'ZoneFez'
    },
    {
      id: 1,
      name: 'Yena'
    },
    {
      id: 2,
      name: 'Marja'
    },
    {
      id: 3,
      name: 'Fennik'
    },
    {
      id: 4,
      name: 'Marjad'
    }
  ]

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result)
  }

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  return (
    <div className="SearchingBox">
        <div style={{ width: 400  } }>
          <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
          />
        </div>


        
      
    </div>
  )
}

export default Searching