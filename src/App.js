import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import Product from './Component/Product/Product';
import Notfound from './Component/Notfound/Notfound';
import CategoryProduct from './Component/CategoryProduct/CategoryProduct'
import ProductDetails from './Component/ProductDetails/ProductDetails'

export default function App() {
  return (
    <div className='text-center'>
<Navbar />
<Header />
<div className='container'>

<Routes>
  <Route path='product' element={<Product />}></Route>
  <Route path='home' element={<Home />}></Route>
  <Route path='/' element={<Home />}></Route>
  <Route path='category/:id' element={<CategoryProduct />}></Route>
  <Route path='product/:id' element={<ProductDetails />}></Route>
  <Route path='*' element={<Notfound />}></Route>
</Routes>
</div>
    </div>
  )
}

