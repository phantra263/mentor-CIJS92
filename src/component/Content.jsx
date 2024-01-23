import React from 'react'

export const Content = ({item, ...props}) => {
  const handleChange = () => {
    item.checked = !item.checked;
    props.onChange();
  }
  return (
    <div>
        <input type="checkbox" checked={item.checked} onChange={() => handleChange()}/>
        <span>{item.name}</span>
        <button onClick={() => props.fnDelete(item)}>Delete</button>
        {
          item.checked ? (<span>DONE</span>) : ('')
        }
    </div>
  )
}
