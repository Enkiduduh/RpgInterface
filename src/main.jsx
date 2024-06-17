import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import CharReducer from './assets/component/CharReducer.jsx'

const store = configureStore({
    reducer: {
      chars: CharReducer
    }
})

configureStore
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider >
  </React.StrictMode>,
)
