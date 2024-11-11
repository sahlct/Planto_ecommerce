import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import MainHome from './Pages/MainHome';
import Cart from './Pages/Cart';
import MainHome from './Pages/mainHome';
import {Product} from './Pages/product';
import { Navbar } from './Pages/navbar';


function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
        <Routes>
          {/* Home path */}
          <Route path="/home" element={<MainHome />} />
          {/* Cart path */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Product />} />
          {/* Redirect invalid paths to /home */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
