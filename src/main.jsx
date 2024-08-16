import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GradientBackground from './util/Gradient/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <GradientBackground />
    <App />
    </>
  </React.StrictMode>,
)
