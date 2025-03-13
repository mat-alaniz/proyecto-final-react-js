import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContex'
import '../css/ItemDetails.css'
import { toast } from 'sonner'

const ItemDetails = ({item}) => {
  const { addToCart } = useContext(CartContext)
  const [quantity, setQuantity] = useState(1)

  const agregarAlCarrito = () => {
    addToCart(item, 1)
    toast.success('Producto agregado al carrito')

  }
  const aumentarCantidad = () => {
    setQuantity(quantity + 1)
  }
  const disminuirCantidad = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }
  return (
    <div className='item-detail'>
        <h2 className='item-title'>{item.title}</h2>
        <div className='item-main-content'>
          <div className='item-image-container'>
          <img className='item-detail-image' src={item.image}></img>

          </div>
           <p className='item-detail-price'>${item.price}</p>
           <p className='item-detail-description'>{item.description}</p>
          </div>

        <div className='item-detail-quantity'>
          <div className='quantity-selector'>
            <button onClick={disminuirCantidad}>-</button>
            <input className='quantity-input' type="number" value={quantity} />
            <button onClick={aumentarCantidad}>+</button>
          </div>
          <button className='add-to-cart-btn' onClick={agregarAlCarrito}>Agregar al carrito</button>
        </div>
    </div>
  )
}

export default ItemDetails