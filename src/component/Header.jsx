import React, { useState } from 'react'


export const Header = (props) => {
  const [inputVal, setInputVal] = useState('')

  const keydow = (event) => {
    // nhấn enter
    if (event.keyCode === 13) {
      props.onSubmit(inputVal);
      setInputVal('')
    }
  }

  const handleChange = (e) => {
    setInputVal(event.target.value)
  }
  return (
    <input type='text' 
    placeholder='Enter your task here...' 
    className='header' 
    value={inputVal} 
    onChange={handleChange}
    onKeyDown={() => keydow(event)}/>
  )
}
