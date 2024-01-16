import React from 'react'

export const Content = ({item, ...props}) => {
  const handleChange = () => {
    console.log(1)
  }
  return (
    <div>
        <input type="checkbox" checked={item.checked} onChange={() => handleChange()}/>
        <span>{item.name}</span>
        {
          item.checked ? (<span>DONE</span>) : ('')
        }

        {props.children}
    </div>
  )
}
