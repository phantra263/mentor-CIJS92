import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './page/App.jsx'
import './index.css'
import { Spending } from './page/Spending.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Spending />
  // </React.StrictMode>,
)
