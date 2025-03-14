import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContex';
import '../css/ItemDetails.css';
import { toast } from 'sonner';

const ItemDetails = ({ item }) => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  
  const handleAddToCart = () => {
    addToCart(item, quantity);
    toast.success(`${quantity} x ${item.title} agregado al carrito`);
  };
  
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  // Handle direct input of quantity
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  return (
    <div className="item-detail">
      <h2 className="item-title">{item.title}</h2>
      
      <div className="item-main-content">
        <div className="item-image-container">
          <img 
            className="item-detail-image" 
            src={item.image} 
            alt={item.title} 
          />
        </div>
        
        <div className="item-text-content">
          <p className="item-detail-price">${item.price}</p>
          <p className="item-detail-description">{item.description}</p>
          
          <div className="item-detail-quantity">
            <div className="quantity-selector">
              <button 
                onClick={decreaseQuantity} 
                aria-label="Disminuir cantidad"
              >
                −
              </button>
              <input 
                className="quantity-input" 
                type="number" 
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
                aria-label="Cantidad"
              />
              <button 
                onClick={increaseQuantity}
                aria-label="Aumentar cantidad"
              >
                +
              </button>
            </div>
            
            <button 
              className="add-to-cart-btn" 
              onClick={handleAddToCart}
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default ItemDetails;