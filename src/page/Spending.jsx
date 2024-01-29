import React, { useState } from 'react'
import { Controller } from '../component/Controller'
import { Chart } from '../component/Chart'
import { v4 as uuidv4 } from 'uuid';
import { Content } from '../component/Content';
let listData = [
  {
    id: uuidv4(),
    nameSpending: 'task1',
    amount: 10, 
    date: '02-02-2022'
  },
  {
    id: uuidv4(),
    nameSpending: 'task1',
    amount: 20,
    date: '01-02-2021'
  }
];

export const Spending = () => {

  const [yearFilter, setYearFilter] = useState('2022');
  let [listDataFilter, setListDataFilter] = useState([]);
  const listYear = ['2021', '2022', '2023', '2024'];

  const handleAddItem = (item) => {
    listData.unshift(item);
    listDataFilter = listData.filter(item => {
      let yearItem = (new Date(item.date)).getFullYear();
      if (yearItem.toString() === yearFilter) {
        return item;
      }
    })
    setListDataFilter([...listDataFilter]);
  }

  const handleChangeSelect = (e) => {
    setYearFilter(e.target.value);
    listDataFilter = listData.filter(item => {
      let yearItem = (new Date(item.date)).getFullYear();
      if (yearItem.toString() === e.target.value) {
        return item;
      }
    }) 
    setListDataFilter([...listDataFilter]);
  }



  return (
    <div className='container'>
      <Controller addItem={handleAddItem} />

      <div className='header'>
        <span>Filter by year</span>

        <select name="cars" id="cars" value={yearFilter} onChange={handleChangeSelect}>
          {listYear.map((item, index) => (<option value={item} key={index}>{item}</option>))}
        </select>
      </div>
      <div className='main'>
            {/* <Chart filter={handleFilter} yearFilter={yearFilter}/> */}
            <div className='list-data'>
              {listDataFilter.map(item => (
                <Content data={item} key={item.id}/>
              ))}
            </div>
        </div>
    </div>
  )
}
