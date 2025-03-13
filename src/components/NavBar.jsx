import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import '../css/NavBar.css'
import { CartContext } from '../context/CartContex'

const NavBar = () => {
    const {cart} = useContext(CartContext)
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <nav className='navbar'>
      <h1 className='nav-logo'>Tienda Comando Valle</h1>
      <div className='nav-links'>
      <Link className='nav-link' to={ '/' }>Home</Link>
      <Link className='nav-link' to={ '/cart' }>Carrito
      {totalItems > 0 ? <span className='cart-count'>{totalItems}</span> : null}
      </Link>

      </div>
      
    </nav>
  )
}

export default NavBar