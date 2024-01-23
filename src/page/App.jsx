import { useState } from 'react'
import '../App.css'
import { Content } from '../component/Content'
import { Footer } from '../component/Footer'
import { Header } from '../component/Header'

function App() {
  let [listTask, setListTask] = useState(
    [{
      checked: true,
      name: 'task 1',
      id: 1
    },
    {
      checked: true,
      name: 'task 2',
      id: 2
    },
    {
      checked: true,
      name: 'task 3',
      id: 3
    },
    {
      checked: false,
      name: 'task 4',
      id: 4
    }]
  )

  const handleChange = () => {
    setListTask([...listTask]);
  }
  const handleDelete = (data) => {
    listTask = listTask.filter(item => item.id != data.id);
    setListTask([...listTask]);
  }

  const addTask = (data) => {
    let obj = {
      checked: false,
      name: data,
      id: listTask.length + 1
    }
    listTask.unshift(obj);
    setListTask([...listTask])
  }
  return (
    <div className='container'>
      <Header onSubmit={addTask}/> 
      <div className='main'>
        {listTask.map((data) => {
          return <Content item={data} key={data.id} onChange={handleChange} fnDelete={handleDelete} />
        })}
      </div>
      <Footer count={listTask.filter(item => item.checked).length}/>
    </div>  
  )
}

export default App
