import React, { useState } from 'react'
import '../Spending.css'

export const Chart = (props) => {
    const listYear = [2021, 2022, 2023, 2024];
    const [yearFilter, setYearFilter] = useState('2021');
    const listData = [
        {
            id: 1,
            month: 'Jan',
            sum: 200
        },
        {
            id: 2,
            month: 'Feb',
            sum: 300
        },
        {
            id: 3,
            month: 'Mar',
            sum: 250
        },
        {
            id: 4,
            month: 'Apr',
            sum: 400
        },
        {
            id: 5,
            month: 'May',
            sum: 400
        },
        {
            id: 6,
            month: 'Jun',
            sum: 400
        },
        {
            id: 7,
            month: 'Jul',
            sum: 400
        },
        {
            id: 8,
            month: 'Aug',
            sum: 400
        },
        {
            id: 9,
            month: 'Sep',
            sum: 400
        },
        {
            id: 10,
            month: 'Oct',
            sum: 400
        },
        {
            id: 11,
            month: 'Nov',
            sum: 600
        },
        {
            id: 12,
            month: 'Dec',
            sum: 200
        }
    ]
    console.log(yearFilter);
    // bắn ra ngoài cái năm hiện tại khi render lần đầu tiên
    props.filter(yearFilter);

    const maxSum = 600;
    const handleChange = (e) => {
        setYearFilter(e.target.value);
        props.filter(yearFilter);
    }
    return (
        <>
            <div className='header'>
                <span>Filter by year</span>

                <select name="cars" id="cars" value={yearFilter} onChange={handleChange}>
                    {listYear.map((item, index) => (<option value={item} key={index}>{item}</option>))}
                </select>
            </div>
            <div className='chart'>
                {
                    listData.map(item => (
                        <div className='item-bar' key={item.id}>
                            <div className='wrap-bar'>
                                <span className='bar' style={{height: item.sum*100/maxSum + '%'}}></span>
                            </div>
                            <span>{item.month}</span>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
