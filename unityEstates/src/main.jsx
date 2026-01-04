import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

// Mount React with routing enabled at the root element.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Client-side routing wrapper */}
    <BrowserRouter>
      {/* App shell with shared layout */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
