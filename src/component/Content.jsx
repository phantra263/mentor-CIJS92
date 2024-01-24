import React from 'react'
import '../Content.css'

export const Content = ({data}) => {
  // Array of month names
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dateObject = new Date(data.date);
  const day = dateObject.getDate();
  const month = monthNames[(dateObject.getMonth() + 1) - 1]; // tháng bắt đầu từ 0 
  const year = dateObject.getFullYear();
  return (
    <div className='item'>
      <div className='block-left'>
        <div className="time">
            <span style={{fontSize: '14px'}}>{month}</span>
            <span style={{fontSize: '14px', fontWeight: '600'}}>{year}</span>
            <strong style={{fontSize: '24px', fontWeight: '600'}}>{day}</strong>
          </div>
          <p>{data.name}</p>
      </div>
      <span className='cost'>$ {data.amount}</span>
    </div>
  )
}
