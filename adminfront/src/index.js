import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AddProduct from './components/AddProduct/AddProduct';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Orders from './components/Orders/Orders';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<Orders />} />
      <Route path='/addProduct' element={<AddProduct />} />
    </Routes>
  </Router>
);


