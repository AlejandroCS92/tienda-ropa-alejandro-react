import React from 'react'
import ReactDOM from 'react-dom/client'
import { CartProvider } from "./componets/CartContext";
import App from './App.jsx'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    
  <Router>
    <CartProvider>
      <App />
    </CartProvider>
  </Router>
    

  </React.StrictMode>
)

