import React, { useState } from 'react';
import Products from './componets/products';
import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './componets/navbar';
import Categories from './componets/categories';
import Home from './componets/home';
import Contact from './componets/contacto';
import Product from './componets/product';
import Cart from './componets/cart';
import Search from './componets/search';
import { CartProvider } from './componets/CartContext';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (query) => {
    setSearchTerm(query);
  };

  return (
    <CartProvider>
      <div>
        <Navbar searchTerm={searchTerm} search={handleSearch} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/category/:category" element={<Categories />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search/:query" element={<Outlet><Route path="/"element={<Search />}/></Outlet>} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;



