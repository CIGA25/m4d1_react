import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HashRouter } from 'react-router'
import { CartProvider } from './contexts/CartContext.jsx'
import { PizzasProvider } from './contexts/PizzasContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <PizzasProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </PizzasProvider>
    </HashRouter>
  </StrictMode>,
)