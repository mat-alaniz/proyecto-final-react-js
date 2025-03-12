
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailsContainer from './components/ItemDetailsContainer'

function App() {


  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<ItemListContainer/>} />
    <Route path="/item/:id" element={<ItemDetailsContainer/>} />
    
  </Routes>
  </BrowserRouter>
  )
}

export default App
