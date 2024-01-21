import { useState } from 'react'
import '../App.css'
import { Content } from '../component/Content'
import { Footer } from '../component/Footer'
import { Header } from '../component/Header'

function App() {
  // let listTask = [{
  //   checked: true,
  //   name: 'task 1',
  //   id: 1
  // },
  // {
  //   checked: true,
  //   name: 'task 2',
  //   id: 2
  // },
  // {
  //   checked: true,
  //   name: 'task 3',
  //   id: 3
  // },
  // {
  //   checked: false,
  //   name: 'task 4',
  //   id: 4
  // }]
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
  let taskDone = 0;


  const handleChange = (data) => {
    listTask.map(item => {
      if (item.id == data.item) {
        item.checked = data.checked
      }
      return item;
    })
    setListTask([...listTask]);
  }
  return (
    <div className='container'>
      <Header/> 
      <div className='main'>
        {listTask.map((data) => {
          return <Content item={data} key={data.id} onChange={handleChange} />
        })}
      </div>
      <Footer count={taskDone}/>
    </div>
  )
}

export default App
