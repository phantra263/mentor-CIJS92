import React, { useState } from 'react'
import { Controller } from '../component/Controller'
import { Chart } from '../component/Chart'
import { v4 as uuidv4 } from 'uuid';
import { Content } from '../component/Content';

export const Spending = () => {
  const listData = [
    {
      id: uuidv4(),
      name: 'task1',
      amount: 10,
      date: '02-02-2022'
    },
    {
      id: uuidv4(),
      name: 'task1',
      amount: 20,
      date: '01-02-2021'
    }
  ];

  let [listDataFilter, setListDataFilter] = useState([]);
  const handleAddItem = (item) => {
    item.id = uuidv4();
    listData.unshift(item);
    setListData([...listData]);
  }
  const handleFilter = (data) => {
    listDataFilter = listData.filter(item => {
      let date = new Date(item.date)
      console.log(date.getFullYear());
      if(date.getFullYear().toString() === data) {
        return item;
      }
    })

    console.log(listDataFilter);
  }

  console.log(1);
  return (
    <div className='container'>
        <Controller addItem={handleAddItem}/>
        <div className='main'>
            <Chart filter={handleFilter}/>
            <div className='list-data'>
              {listData.map(item => (
                <Content data={item} key={item.id}/>
              ))}
            </div>
        </div>
    </div>
  )
}
