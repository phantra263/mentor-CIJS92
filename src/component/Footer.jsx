import React from 'react'

export const Footer = ({count}) => {
  return (
    <div className='footer'>
        <span>{count} task left</span>
        <p>Mindx Todolist</p>
    </div>
  )
}
