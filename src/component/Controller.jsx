import React, { useState } from 'react'
import '../Controller.css'
import { v4 as uuidv4 } from 'uuid';

export const Controller = (props) => {
    const [flag, setFlag] = useState(false);
    const [formData, setFormData] = useState({
        id: uuidv4(),
        nameSpending: '',
        amount: '',
        date: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addItem(formData);
        setFormData({
            id: uuidv4(),
            nameSpending: '',
            amount: '',
            date: ''
        })
    }
  return (
    <>
       <div className='controller'>
         {
            !flag ? 
            (<button onClick={() => setFlag(!flag)}>ADD NEW EXPENSE</button>) :
            (<form className='form-add' onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor="name">Name</label>
                    <input type="text" name='nameSpending' 
                    onChange={handleChange}
                    value={formData.nameSpending}
                    id='nameSpending' 
                    placeholder='Enter name  here ...' />
                </div>
                <div className='form-control'>
                    <label htmlFor="amount">Amount</label>
                    <input type="number" name='amount' 
                    onChange={handleChange}
                    value={formData.amount}
                    id='amount' 
                    placeholder='Enter amount  here ...' />
                </div>
                <div className='form-control'>
                    <label htmlFor="date">Date</label>
                    <input type="date" name='date' 
                    onChange={handleChange}
                    value={formData.date}
                    id='date' 
                    placeholder='dd/mm/yyyy' />
                </div>

                <button type='submit'>ADD</button>
                <button type='button' onClick={() => setFlag(!flag)}>CANCEL</button>
            </form>)
         }
        </div>
    </>
  )
}
