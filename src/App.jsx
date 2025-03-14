
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import ItemListContainer from './components/ItemListContainer'
import ItemDetailsContainer from './components/ItemDetailsContainer'
import Cart from './components/Cart'
import NavBar from './components/NavBar'
import { Toaster } from 'sonner'
import Checkout from './components/Checkout'
import OrderSearch from './components/OrderSearch'



function App() {


  return (
  <BrowserRouter>
  <NavBar/>
  <Routes>
    <Route path="/" element={<ItemListContainer/>} />
    <Route path="/item/:id" element={<ItemDetailsContainer/>} />
    <Route path="/category/:categoryId" element={<ItemListContainer/>} />
    <Route path="/checkout" element={<Checkout/>} />
    <Route path="/orderSearch" element={<OrderSearch/>} />
    <Route path='/cart' element={<Cart/>} />

    
  </Routes>
  <Toaster position="top-right" richColors/>
  </BrowserRouter>
  )
}

export default App
