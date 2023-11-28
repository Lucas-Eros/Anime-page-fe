import React, { useState } from 'react'
import "./SearchInput.css"
import useDebouce from './useDebouce'

const SearchInput = ({value, onChange}) => {
  const debounceChange = useDebouce(onChange, 500)

  const [displayValue, setDisplayValue] = useState(value)

  const handleChange = (event) => {
    setDisplayValue(event.target.value)
    debounceChange(event.target.value)
    // onChange(event.target.value)
  }

  return (
    <input className='input' type='search' value = {displayValue} onChange={handleChange}></input>
  )
}

export default SearchInput