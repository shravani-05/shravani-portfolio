// nodeModules
import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Components
import App from './App.jsx';

//css link
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
