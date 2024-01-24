import React, { useState } from 'react'


export const Header = (props) => {
  const [inputVal, setInputVal] = useState('');
  let [flag, setFlag] = useState(false);


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
    <div>
      <div style={{display: flag ? 'none' : 'block'}}>
        <input type='text'
          placeholder='Enter your task here...'
          className='header'
          value={inputVal}
          onChange={handleChange}
          onKeyDown={() => keydow(event)} />
          <button onClick={() => setFlag(!flag)}>ADD</button>
      </div>
      <div style={{display: flag ? 'block' : 'none'}}>
        <form action="">
          <div>form</div>
          <button onClick={() => setFlag(!flag)}>cancel</button>
        </form>
      </div>
    </div>

  )
}
