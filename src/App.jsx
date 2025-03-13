
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailsContainer from './components/ItemDetailsContainer'
import Cart from './components/Cart'
import NavBar from './components/NavBar'
import { Toaster } from 'sonner'


function App() {


  return (
  <BrowserRouter>
  <NavBar/>
  <Routes>
    <Route path="/" element={<ItemListContainer/>} />
    <Route path="/item/:id" element={<ItemDetailsContainer/>} />
    <Route path='/cart' element={<Cart/>} />

    
  </Routes>
  <Toaster position="top-right" richColors/>
  </BrowserRouter>
  )
}

export default App
