import React from 'react'
import { Light } from '../component/Light'
import '../TrafficLights.css'

export const TrafficLights = () => {
    const lights = [
        {
            id: 1,
            color: 'red'
        },
        {
            id: 2,
            color: 'green'
        },
        {
            id: 3,
            color: 'yellow'
        },

    ]
    return (
        <>
            <button>Next</button>

            <div className='list-light'>
                {lights.map(item => {
                    return <Light bgColor={item} key={item.id}/>
                })}
            </div>
        </>

    )
}
