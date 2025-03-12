import React from 'react'

const ItemDetails = ({item}) => {
  return (
    <div>
        <h2>{item.title}</h2>
        <img src={item.image}></img>
        <p>{item.description}</p>
        <p>${item.price}</p>
    </div>
  )
}

export default ItemDetails