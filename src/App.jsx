import React from 'react'
import Nav from './component/Nav'
import './App.css'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Product from './component/Product';
import Cart from './component/Cart';
import {  ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Update from './component/Update';
import Login from './component/Login';
import Signup from './component/Signnup';
const App = () => {
  return (
    <div>
      <Router>
      <ToastContainer />
      <Nav/>
        <Routes>
          <Route path="/product" element={<Product/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path='/update/:id' element={<Update/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>}/>
          
        </Routes>
      </Router>

    </div>
  )
}

export default App

