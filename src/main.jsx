import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/index.css'
import { UsersApp } from './layout/UsersApp.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <UsersApp />
    </BrowserRouter>
  </React.StrictMode>,
)
