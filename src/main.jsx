import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/index.css'
import { BrowserRouter } from 'react-router-dom'
import { Credencial } from './routes/Credencial'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Credencial />
    </BrowserRouter>
  </React.StrictMode>,
)
