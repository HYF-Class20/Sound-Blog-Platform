import React from 'react'
import { useState } from 'react'
import './SearchBar.css'

const SearchBar = () => {
    const {input, setInput} = useState ('');
    
  return (
    <div className='input'>

        < input className= 'search-bar' placeholder='search sound..'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />
        
        </div>
  )
}

export default SearchBar