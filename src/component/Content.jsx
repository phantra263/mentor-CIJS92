import React from 'react'

export const Content = (props) => {
  return (
    <div className='wrap-content'>
        <h3>{props.data.title}</h3>
        <p>{props.data.description}</p>
    </div>
  )
}
