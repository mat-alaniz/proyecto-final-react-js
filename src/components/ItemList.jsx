import React from 'react';
import { Link } from 'react-router-dom';
import '../css/ItemList.css';

const ItemList = ({ items }) => {
  return (
    <div className='item-list'>
      {items.map((item, index) => (
        <div 
          className='item-card' 
          key={item.id} 
          style={{ '--animation-order': index }}
        >
          {item.discount && (
            <span className='item-badge'>{item.discount}% OFF</span>
          )}
          
            <img 
              className='item-image' 
              src={item.image}
              alt={item.title}
              loading="lazy"
            />
            <h2>{item.title}</h2>
            <p className='item-price'>
              {item.oldPrice && (
                <span className='item-old-price'>${item.oldPrice}</span>
              )}
              ${item.price}
            </p>
          
          <div className='item-actions'>
            <Link className='item-link' to={`/item/${item.id}`}>
            <button className='add-to-cart-btn'>
              Ver detalle
            </button>
          </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;