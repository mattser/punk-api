import React from 'react'
import './SearchBox.scss'

const SearchBox = (props) => {
  return (
    <div className='search'>
      <h3 className='search__heading'>Search Punk API</h3>
      <input className='search__search-box' id='name' onInput={props.handleInput}/>
    </div>
  )
}

export default SearchBox