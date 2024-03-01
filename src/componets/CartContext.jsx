import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      
      return { ...state, cart: [...state.cart, action.payload] , cartCount: state.cartCount + 1 };
    
    // Other cases for different actions

    // default:
      // return state;
  }
};

const CartProvider = ({ children }) => {
  const initialState = {
    cart: [],
    cartCount: 0
  };
  const [state, dispatch] = useReducer(cartReducer, initialState);
  console.log(state)
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  
  if(!context) {
    throw new Error('Use cart must be used within a CartProvider');
  }
  return context;
};

export { CartProvider, useCart };