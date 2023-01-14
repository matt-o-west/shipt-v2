import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
//import { Provider } from 'react-redux'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
//import { aliexpressApi } from './redux/services/aliexpress'

//import store from './redux/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>

        <App />

  </React.StrictMode>
)
