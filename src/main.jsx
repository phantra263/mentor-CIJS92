import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './page/App.jsx'
import './index.css'
import { TrafficLights } from './page/TrafficLights.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <App />
    // <TrafficLights />
  // </React.StrictMode>,
)
