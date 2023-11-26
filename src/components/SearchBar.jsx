import React, { useCallback } from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import './SearchBar.css'

const SearchBar = () => {
  const [soundList, setSoundList] = useState([])  
  const [input, setInput] = useState ('');

  const fetchRecords = async () => {
    try {
      const response = await axios.get('http://localhost:5010/audio')
      const data = response.data.result;
      setSoundList(data);
    } catch (error) {
      console.error( 'Error fetching records:', error);
      return;
    }
  };
  


   useEffect (() => {
    fetchRecords()

   }, [])

  return (
    <div className='input'>
    <input
      className='search-bar'
      type='text'
      placeholder='search...'
      onChange={(e) => {setInput(e.target.value)}}
    />
    {input.length > 0 && (
      <div>
        {soundList
          .filter((item) =>
            item.title.toLowerCase().includes(input.toLowerCase())

          )
          .map((item) => (
            <div className='audio-container' key={item.id}>
              <h2>{item.title}</h2>
              <h2>{item.genre}</h2>
              <img src={item.thumbnail} alt={`${item.title} thumbnail`} />
            </div>
          ))}
      </div>
    )}
  </div>
  

  )
}

export default SearchBar