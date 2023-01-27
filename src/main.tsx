import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { walmartApi } from './redux/cartSlice'

import store from './redux/store'

console.log(store.getState())

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
    <ApiProvider api={walmartApi}>
        <App />
        </ApiProvider>  
    </Provider>
  </React.StrictMode>
)
