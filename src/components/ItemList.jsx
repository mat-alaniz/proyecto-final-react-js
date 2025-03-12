import React from 'react'
import { Link } from 'react-router-dom'

const ItemList = ({items}) => {
  return (
    <div>
        {items.map((item) => (
            <div key={item.id}>
                <Link to={`/item/${item.id}`}>
                <h2>{item.title}</h2>
                <img src={item.image}></img>
                <p>{item.description}</p>
                <p>${item.price}</p>
                </Link>
            </div>
        ))}
    </div>
  )
}

export default ItemList