
import dotenv from 'dotenv';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'src/css/index.css'
// Import our custom CSS
import 'src/.scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

dotenv.config();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

