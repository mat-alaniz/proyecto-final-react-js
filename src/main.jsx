
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Cart from './components/Cart.jsx'
import { CartProvider } from './context/CartContex.jsx'

createRoot(document.getElementById('root')).render(
<CartProvider>
   <App />
   </CartProvider>
   
  
)
