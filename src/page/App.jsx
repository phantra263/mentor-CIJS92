import '../App.css'
import { Content } from '../component/Content'
import { Footer } from '../component/Footer'
import { Header } from '../component/Header'

function App() {
  let listTask = [{
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
  let taskDone = 0;

  return (
    <div className='container'>
      <Header/> 
      <div className='main'>
        {listTask.map((data) => {
          return data.id === 3 ?  <Content item={data} key={data.id}>
            <span>important</span>
            </Content> : <Content item={data} key={data.id}/>
        })}
      </div>
      <Footer count={taskDone}/>
    </div>
  )
}

export default App
