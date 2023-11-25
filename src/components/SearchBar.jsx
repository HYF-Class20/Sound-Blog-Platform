import React, { useCallback } from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import './SearchBar.css'

const SearchBar = () => {
  const [soundList, setSoundList] = useState([])  
  const [input, setInput] = useState ('');

   useEffect (() => {
    axios.get('')
    .then((response) => setSoundList(response.data.results)), []
   })
  return (
    <div className='input'>

        < input className= 'search-bar' type= 'text' placeholder='search...'
  
        onChange={(e) => setInput(e.target.value)}
        />
        {soundList.filter((item) => {
          if (input === ''){
            return item
          } else if (item.title.toLowerCase().includes(input.toLowerCase())){
           return item
          }
        })
        .map((item) => {
          return <div className='audio-container' key={item.id}>
            <h2>{item.title}</h2>
            <h2>{item.genre}</h2>
            <h3>{item.author}</h3>
            </div>
        })}
        </div>
  )
}

export default SearchBar