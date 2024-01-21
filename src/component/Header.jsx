import React from 'react'
const keydow = (event) => {
  if (event.keyCode === 13) {
    console.log(24)
  }
}

export const Header = () => {
  return (
    <input type='text' placeholder='Enter your task here...' className='header' onKeyDown={() => keydow(event)}/>
  )
}
