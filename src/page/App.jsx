import '../App.css'
import { Box } from '../component/Box'
import { Content } from '../component/Content'
import { Footer } from '../component/Footer'
import { Header } from '../component/Header'
import { Sidebar } from '../component/Sidebar'

function App() {
  let listItem = [{
    title: 'Title 1',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem nesciunt magnam quibusdam provident ipsam asperiores iste saepe pariatur sunt? Minus incidunt, ',
    id: 1
  },
  {
    title: 'Title 2',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem nesciunt magnam quibusdam provident ipsam asperiores iste saepe pariatur sunt? Minus incidunt, ',
    id: 2
  },
  {
    title: 'Title 3',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem nesciunt magnam quibusdam provident ipsam asperiores iste saepe pariatur sunt? Minus incidunt, ',
    id: 3
  }];

  let listBox = [{
    title: 'BOX 1',
    id: 1
  },
  {
    title: 'BOX 2',
    id: 2
  },
  {
    title: 'BOX 3',
    id: 3
  },
  {
    title: 'BOX 4',
    id: 4
  }]

  return (
    <>
      <Header />
      <main>
        <div className='container'>
          <div className='content-left'>
            <h1>Đây là title</h1>
            <div className='list-intro'>
              {listItem.map(item => <Content data={item} key={item.id} />)}
            </div>
          </div>
          <Sidebar />
        </div>

        <div className='list-box'>
          {listBox.map(item => <Box data={item} key={item.id}/>)}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
