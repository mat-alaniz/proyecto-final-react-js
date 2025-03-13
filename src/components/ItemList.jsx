import React from 'react'
import { Link } from 'react-router-dom'
import '../css/ItemList.css'

const ItemList = ({items}) => {
  return (
    <div className='item-list'>
        {items.map((item) => (
            <div className='item-card' key={item.id}>
                <h2>{item.title}</h2>
                <img className='item-image' src={item.image}></img>
                <p className='item-description'>{item.description}</p>
                <p className='item-price'>${item.price}</p>
                <div className='item-actions'>
                  <Link className='item-link' to={`/item/${item.id}`}>
                  <button className='add-to-cart-btn'>Ver detalle</button>
                </Link>
                </div>
            </div>
        ))}
    </div>
  )
}

export default ItemList