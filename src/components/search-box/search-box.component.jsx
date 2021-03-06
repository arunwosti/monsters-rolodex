import React from 'react';
import './search-box.component.css'

export default function SearchBox( {placeholder,handleChange} ) {
  return (
    <div >
        <input className='search'
         type='search' 
         placeholder={placeholder}
         onChange={handleChange}
      />
    </div>
  )
}
