import React, { useContext } from "react";
import { CartContext } from "../context/CartContex";
import "../css/Cart.css";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, clearCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  //mensaje si el carrito esta vacio
  if (cart.lengeht === 0) return <div>El carrito esta vacio</div>;
  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity >= 1) {
      updateQuantity(itemId, newQuantity);
    }
  };
  if (cart.length === 0) return <div className="cart-empty">El carrito esta vacio</div>;

  return (
    <div className="cart">
      <h2>Carrito de compra</h2>
      <div className="cart-items">
        {cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt="" className="cart-item-image" />
            <div className="cart-item-details">
              <h3 className="cart-item-title">{item.title}</h3>
              <div className="cart-item-quantity">
                <button
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity - 1)
                  }
                >
                  -
                </button>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item, e)}
                />
                <button
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity + 1)
                  }
                >
                  +
                </button>
              </div>
              <p className="cart-item-price">
                {item.quantity} x ${item.price} = ${item.quantity * item.price}
              </p>
              <button className="cart-item-remove" onClick={() => removeFromCart(item.id)}>Eliminar

              </button>
            </div>
          </div>
        ))}
        <div className="cart-footer">
        <p className="cart-total">Total:{total}</p>
        <button className="cart-clear-btn" onClick={clearCart}>Vaciar carrito</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
