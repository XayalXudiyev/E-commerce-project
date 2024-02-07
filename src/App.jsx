// App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Products from './components/Products';
import Login from './components/Login';
import SignUp from './components/SignUp';

const App = () => {
  return (
    <div className='select-none '>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/products/:search" element={<Products />} /> {/* Arama sonuçlarını göstermek için Products bileşenini çağırın */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
