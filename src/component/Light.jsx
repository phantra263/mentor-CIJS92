import React from 'react'

export const Light = ({bgColor}) => {
  const {color} = bgColor
  return (
    <div className='light' style={{background: color}}></div>
  )
}
