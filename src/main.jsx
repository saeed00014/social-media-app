import React from 'react'
import ReactDOM from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import App from './App'
import AppS from './pages/amashop/App'

import dataSlice from './store/dataSlice'
import loadingSlice from './store/loadingSlice'
import AppSma from './pages/sma/App'
import UiSlice from './pages/sma/store/UiSlice'

const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
    loading: loadingSlice.reducer,
    ui: UiSlice.reducer
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {window.location.href.includes('shop') && <AppS /> }
      {window.location.href.includes('sma') && <AppSma /> }
      {!window.location.href.includes('sma') && !window.location.href.includes('shop') && <App /> }
    </Provider>
  </React.StrictMode>,
)
