import React, { useState, useEffect } from "react";
import { useCart } from "./CartContext";

const Cart = () => {
  const { state, dispatch } = useCart();
  
  
  const [cartProducts, setCartProducts] = useState(state.cart);
  console.log(cartProducts.length);

  const removeFromCart = (productId) => {
    
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };
  
  return (
    <div>
      <h2>Carrito de Compras</h2>
      {state.cartCount === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul>
          {cartProducts.map((product) => {
              console.log(product);
              return (
            <li key={product}>
              {product} - ${product} USD
              <button onClick={() => removeFromCart(product)}>
                Eliminar del carrito
              </button>
            </li>
          )})}
        </ul>
      )}
    </div>
  );
};

export default Cart;

